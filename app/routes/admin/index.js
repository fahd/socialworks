import React from 'react'
import Admin from './Admin'
import CreateEvent from './createEvent/index'
import Layout from '../../components/Layout'


export default {
  path: '/admin',
  children: [{
      path: '/',
      action() {
        return {
          title: "Admin | SocialWorks",
          description: "Admin Panel",
          keywords: 'chance the rapper charity',
          component:
          <Layout>
            <Admin/>
          </Layout>
        }
      }
    },
    {
      path: '/create',
      children: [{
        path: '/',
        action() {
          return {
            title: 'Create an Event | SocialWorks',
            keywords: 'create an event',
            description: 'create an event',
            component: <Layout><CreateEvent/></Layout>
          }
        }
      }]
    }
  ]
}
