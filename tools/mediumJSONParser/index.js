var request = require("request") // Include the request lib - run npm install request
var parseMediumJSONFeed = require("./parseMediumJSONFeed")
const url = 'https://medium.com/socialworks?format=json'

exports.handler = (event, context, callback) => {
  callback = context.done;
  var data = event.bodyJson || {};

  request({url, json:true}, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      let jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''))
      let posts = parseMediumJSONFeed(jsonBody)
      callback(null, posts);
    }
  })
};
