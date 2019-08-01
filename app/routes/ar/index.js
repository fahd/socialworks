import React from 'react'
import AnnualReport from './AnnualReport';
import Layout from '../../components/Layout';

export default {

  path: '/private/annual-report-2017',

  async action () {
    return {
      title: "| SocialWorks",
      description: "",
      keywords: '',
      component: <Layout><AnnualReport /></Layout>
    }
  }

}
