import React from 'react'
import Home from './Home'
import Layout from '../../components/Layout'

export default {

  path: '/',

  async action () {
    return {
      title: 'SocialWorks Chicago: Youth Empowerment | SocialWorks',
      description: 'Discover how Chance the Rapper and SocialWorks Chicago empower youth through the arts, education, and civic engagement. Get involved with SocialWorks today!',
      component: <Layout><Home /></Layout>
    }
  }

}
