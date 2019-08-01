import React from 'react'
import Initiatives from './Initiatives'
import Layout from '../../components/Layout'

export default {

  path: '/initiatives',

  async action () {
    return {
      title: 'SocialWorks - Initiatives',
      description: 'SocialWorks initiatives in the community',
      component: <Layout><Initiatives /></Layout>
    }
  }

}
