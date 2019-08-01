import React from 'react'
import OpenMike from './OpenMike'
import Layout from '../../components/Layout'

export default {

  path: '/openmike',

  async action () {
    return {
      title: 'OpenMike: Chicago Open Mic for Youth | SocialWorks',
      description: 'Participate in OpenMike Chicago! SocialWorks partners with the Chicago Public Library to host a monthly Chicago open mic for youth. Register for OpenMike here.',
      keywords: 'open mike, chicago open mic',
      component: <Layout><OpenMike /></Layout>
    }
  }

}
