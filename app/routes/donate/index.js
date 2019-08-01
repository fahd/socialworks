import React from 'react'
import Donate from './Donate'
import Layout from '../../components/Layout'

export default {

  path: '/donate',

  async action () {
    return {
      title: "Donate: Empower the Youth | SocialWorks",
      description: "Donate to SocialWorks to help empower the youth through education, arts, and more! Your education donation aids the organization's efforts to empower the youth.",
      keywords: 'empower the youth, education donation',
      component: <Layout><Donate /></Layout>
    }
  }

}
