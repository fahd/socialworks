import React from 'react'
import Kok from './Kok'
import Layout from '../../components/Layout'

export default {

  path: '/kok',

  async action () {
    return {
      title: 'Kids of the Kingdom Summer School Program | SocialWorks',
      description: 'Get information on the Kings of the Kingdom summer school program in Chicago! SocialWorks supports the work of the Kids of the Kingdom summer school program.',
      keywords: 'kids of the kingdom, summer school program',
      component: <Layout><Kok /></Layout>,
      scripts: [<script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvbyfmxY__l00aMWK3dUXeifgegGY7bqg&libraries=places"></script>]
    }
  }

}
