import React from 'react'
import Events from './Event.js'
import EventContainer from './EventContainer'
import Layout from '../../components/Layout'
import NotFound from '../notFound'
import {ref, config, firebaseAuth} from '../../auth/firebase'

export default {
  path: '/events',
  children : [
    {
      path: '/',
      async action() {
        return {
          title: 'Events | SocialWorks',
          keywords: 'socialworks events, chicago events',
          description: "Learn all about SocialWorks' latest events across the city of Chicago!",
          component: <Layout><Events/></Layout>
        }
      }
    },
    {
      path: '/:id',
      async action(context) {
        let path = context.path.slice(1)
        return ref
          .child('events')
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
              let event = snapshot.val()
              return {
                title: event.title,
                // keywords: event.keywords,
                description: event.metaDescription,
                twitterCardImage: event.coverImage,
                twitterCardDescription: event.metaDescription,
                cardImage: event.coverImage,
                ogTitle: `SocialWorks - ${event.title}`,
                ogDescription: event.metaDescription,
                component:<Layout><EventContainer event={event}/></Layout>
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
