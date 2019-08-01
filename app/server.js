import 'babel-polyfill'
import path from 'path'
import express from 'express'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import React from 'react'
import ReactDOM from 'react-dom/server'
import UniversalRouter from 'universal-router'
import PrettyError from 'pretty-error'
import App from './components/App'
import Html from './components/Html'
import {ErrorPageWithoutStyle} from './routes/error/ErrorPage'
import errorPageStyle from './routes/error/ErrorPage.css'
import routes from './routes'
import assets from './assets' // eslint-disable-line import/no-unresolved
import configureStore from './store/configureStore'
import {setRuntimeVariable} from './actions/runtime'
import {port, auth} from './config'
import awsConfig from './auth/aws-config.js'
import AWS from 'aws-sdk'
import multer from 'multer'
import request from 'request'
import googl from 'goo.gl'
const googlAPiKey = process.env.GOOGLAPIKEY || ''

// import authAws from './auth/aws-config.js'
const app = express();

// Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
// user agent is not known.
// -----------------------------------------------------------------------------
global.navigator = global.navigator || {}
global.navigator.userAgent = global.navigator.userAgent || 'all'

//
// Register Node.js middleware
// -----------------------------------------------------------------------------
const upload = multer();
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(compression())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// GOOGL SHORTENING ===============================================
googl.setKey(googlAPiKey);


// S3 UPLOADING ===============================================
var accessKeyId = awsConfig.accessKeyId;
var secretAccessKey = awsConfig.secretAccessKey;
var region = awsConfig.region;

AWS.config.update({accessKeyId,secretAccessKey,region});
const s3 = new AWS.S3();
const params = {Bucket: 'socialworksEvents'};
s3.createBucket(params);
const s3Bucket = new AWS.S3({params: {Bucket: ''}});

app.post('/api/shorten', (req, res) => {
  googl.shorten(req.body.url)
    .then(function (shortUrl) {
        console.log('shortened URL:', shortUrl);
        res.send(shortUrl);
    })
    .catch(function (err) {
        console.error('error:', err.message);
    });
});


app.post('/api/instagram', (req, res) => {
  let url = 'https://www.instagram.com/socialworks_chi/?__a=1'
  request(url, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let feed = JSON.parse(body).items
      res.json(feed)
    } else {
      console.log("Got an error: ", error, ", status code: ", response.statusCode)
    }
  })
});

app.post('/api/uploadToS3', upload.single('file'), (req, res) => {

  var file = req.file;
  var name = req.file.originalname;
  var hash = req.body.hash;
  var title = req.body.title;
  var ext = (/[^.]+$/ig).exec(name)[0];
  var image = `${title}${hash}.${ext}`;

  const data = {Key:image, Body: file.buffer}
  s3Bucket.upload(data, function (err, data) {
    if (err) {
      console.log('theres an error', err)
    }
    if (data) {
      console.log('Amazon S3 upload successful');
      res.status(200).send(data);
    }
  })
});

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
app.get('*', async(req, res, next) => {
  try {
    const store = configureStore({}, {cookie: req.headers.cookie})
    store.dispatch(setRuntimeVariable({name: 'initialNow', value: Date.now()}))
    const css = new Set()
    // Global (context) variables that can be easily accessed from any React component
    // https://facebook.github.io/react/docs/context.html
    const context = {
      // Enables critical path CSS rendering
      // https://github.com/kriasoft/isomorphic-style-loader
      insertCss: (...styles) => {
        // eslint-disable-next-line no-underscore-dangle
        styles.forEach(style => css.add(style._getCss()))
      },
      // Initialize a new Redux store
      // http://redux.js.org/docs/basics/UsageWithReact.html
      store
    }


    const route = await UniversalRouter.resolve(routes, {
      ...context,
      path: req.path,
      query: req.query
    })

    if (route.redirect) {
      res.redirect(route.status || 302, route.redirect)
      return
    }

    const data = {
      ...route
    }

    data.children = ReactDOM.renderToString(
      <App context={context}>{route.component}</App>
    )

    data.style = [...css].join('')
    data.scripts = [assets.vendor.js, assets.client.js]
    data.state = context.store.getState()

    if (assets[route.chunk]) {
      data.scripts.push(assets[route.chunk].js)
    }



    const html = ReactDOM.renderToStaticMarkup(<Html {...data}/>)
    res.status(route.status || 200)
    res.set('cache-control', 'private, max-age=86400')

    res.send(`<!doctype html>${html}`)
  } catch (err) {
    next(err)
  }
})

//
// Error handling
// -----------------------------------------------------------------------------
const pe = new PrettyError()
pe.skipNodeFiles()
pe.skipPackage('express')

app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.log(pe.render(err)) // eslint-disable-line no-console
  const html = ReactDOM.renderToStaticMarkup(
    <Html title='Internal Server Error' description={err.message} style={errorPageStyle._getCss()} // eslint-disable-line no-underscore-dangle
>
    {ReactDOM.renderToString(<ErrorPageWithoutStyle error={err}/>)}
  </Html>,)
  res.status(err.status || 500)
  res.send(`<!doctype html>${html}`)
})

//
// Launch the server
// -----------------------------------------------------------------------------
/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`The server is running at http://localhost:${port}/`)
})
/* eslint-enable no-console */
