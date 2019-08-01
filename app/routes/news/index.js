import React from 'react'
import News from './News'
import Article from './Article'
import Layout from '../../components/Layout'
import NotFound from '../notFound'
import {ref, config, firebaseAuth} from '../../auth/firebase'

export default {
  path: '/news',
  children : [
    {
      path: '/',
      async action() {
        return {
          title: 'In the News | SocialWorks',
          keywords: 'socialworks news, chicago news',
          description: 'Get all the latest SocialWorks news now. Learn about our awards, accomplishments, distinctions and Chance the Rapper news as we are recognized by the media.',
          component: <Layout><News /></Layout>
        }
      }
    },
    {
      path: '/:id',
      async action(context) {
        let path = context.path.slice(1)
        return ref
          .child('medium')
          .child(`${path}`)
          .once('value')
          .then(snapshot => {
            let exists = snapshot.exists();
            if (!exists){
              return {
                title,
                component: <Layout><NotFound title={'Page Not Found'} /></Layout>,
                status: 404
              }
            }
            else if (exists){
              let article = snapshot.val()
              return {
                title: `${article.title} | SocialWorks`,
                keywords: article.keywords,
                description: article.description,
                component:<Layout><Article article={article}/></Layout>
              }
            }
          })
          .catch(err => {
            console.log('error', err)
          })

      }
    }
  ]
}
