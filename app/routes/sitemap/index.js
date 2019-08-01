import React from 'react'
import SiteMap from './SiteMap'
import Layout from '../../components/Layout'

export default {

  path: '/sitemap',

  async action () {
    return {
      title: 'Sitemap | SocialWorks',
      keywords: '',
      description: 'SocialWorks site map.',
      component: <Layout><SiteMap /></Layout>
    }
  }

}
