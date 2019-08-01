import React from 'react'
import SupportCPS from './SupportCPS'
import Layout from '../../components/Layout'

export default {

  path : '/supportcps',
  children : [
    {
      path: '/',
      action() {
        return {
          title: 'Support CPS: Chance the Rapper Arts Fund | SocialWorks',
          keywords: 'support cps, arts fund',
          description: 'Support CPS through the Chance the Rapper New Chance: Arts & Literature Fund. Donate now to the Chicago Public School arts fund through SocialWorks! #supportCPS',
          component: <Layout><SupportCPS/></Layout>
        }
      }
    },
    {
      path: '/newchance',
      children: [
        {
          path: '/',
          action() {
            return {
              title: 'Support CPS: Chance the Rapper Arts Fund | SocialWorks',
              keywords: 'support cps, arts fund',
              description: 'Support CPS through the Chance the Rapper New Chance: Arts & Literature Fund. Donate now to the Chicago Public School arts fund through SocialWorks! #supportCPS',
              component: <Layout><SupportCPS startIndex={0}/></Layout>
            }
          }
        }
      ]
    },
    {
      path: '/reform',
      children: [
        {
          path: '/',
          action() {
            return {
              title: 'Support CPS: Chance the Rapper Arts Fund | SocialWorks',
              keywords: 'support cps, arts fund',
              description: 'Support CPS through the Chance the Rapper New Chance: Arts & Literature Fund. Donate now to the Chicago Public School arts fund through SocialWorks! #supportCPS',
              component: <Layout><SupportCPS startIndex={1}/></Layout>
            }
          }
        }
      ]
    },
    {
      path: '/brands',
      children: [
        {
          path: '/',
          action() {
            return {
              title: 'Support CPS: Chance the Rapper Arts Fund | SocialWorks',
              keywords: 'support cps, arts fund',
              description: 'Support CPS through the Chance the Rapper New Chance: Arts & Literature Fund. Donate now to the Chicago Public School arts fund through SocialWorks! #supportCPS',
              component: <Layout><SupportCPS startIndex={2}/></Layout>
            }
          }
        }
      ]
    },
    {
      path: '/schools',
      children: [
        {
          path: '/',
          action() {
            return {
              title: 'Support CPS: Chance the Rapper Arts Fund | SocialWorks',
              keywords: 'support cps, arts fund',
              description: 'Support CPS through the Chance the Rapper New Chance: Arts & Literature Fund. Donate now to the Chicago Public School arts fund through SocialWorks! #supportCPS',
              component: <Layout><SupportCPS startIndex={3}/></Layout>
            }
          }
        }
      ]
    },
    {
      path: '/supporters',
      children: [
        {
          path: '/',
          action() {
            return {
              title: 'Support CPS: Chance the Rapper Arts Fund | SocialWorks',
              keywords: 'support cps, arts fund',
              description: 'Support CPS through the Chance the Rapper New Chance: Arts & Literature Fund. Donate now to the Chicago Public School arts fund through SocialWorks! #supportCPS',
              component: <Layout><SupportCPS startIndex={4}/></Layout>
            }
          }
        }
      ]
    }
  ]
}
