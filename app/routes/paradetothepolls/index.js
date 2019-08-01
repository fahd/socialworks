import React from 'react'
import Parade from './Parade'
import Layout from '../../components/Layout'

export default {

  path: '/paradetothepolls',

  async action () {
    return {
      title: 'Parade to the Polls: Get Out the Vote | SocialWorks',
      keywords: "parade to the polls, get out the vote",
      component: <Layout><Parade /></Layout>,
      description: "Parade to the polls with Chance the Rapper! SocialWorks helps increase civic engagement with the Parade to the polls 'Get Out the Vote' Chicago initiative."
    }
  }

}
