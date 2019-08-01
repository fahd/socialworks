import React from 'react'
import About from './About'
import Layout from '../../components/Layout'

export default {

  path: '/about',

  async action () {
    return {
      title: "About SocialWorks: Chance the Rapper's Charity | SocialWorks",
      description: "Learn how Chance the Rapper's charity, SocialWorks, fosters youth empowerment! Read about the organization's youth empowerment mission and approach here.",
      keywords: 'chance the rapper charity',
      component: <Layout><About /></Layout>
    }
  }

}
