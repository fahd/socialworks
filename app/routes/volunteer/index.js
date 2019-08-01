import React from 'react'
import Volunteer from './Volunteer'
import Layout from '../../components/Layout'

export default {

  path: '/volunteer',

  async action () {
    return {
      title: 'Volunteer in Chicago | SocialWorks',
      keywords: 'volunteer in chicago, chicago volunteer opportunities',
      description: 'Register to volunteer in Chicago with SocialWorks! Discover how you can volunteer in Chicago through our youth-focused Chicago volunteer opportunities.',
      component: <Layout><Volunteer /></Layout>
    }
  }

}
