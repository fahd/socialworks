import React from 'react'
import WarmestWinter from './WarmestWinter'
import Layout from '../../components/Layout'

export default {

  path: '/warmestwinter',

  async action () {
    return {
      title: 'Warmest Winter Chicago: EMPWR Coat Initiative | SocialWorks',
      keywords: 'EMPWR coat, warmest winter chicago',
      component: <Layout><WarmestWinter /></Layout>,
      description: 'Learn about the Warmest Winter Chicago: EMPWR coat initiative! SocialWorks helped raise over $100,000 to provide homeless individuals with EMPWR coats.'
    }
  }

}
