import React from 'react'
import Download from './download'


export default {

  path: '/download-volunteer-list',

  async action () {
    return {
      title: 'volunteer-list',
      component: <Download/>
    }
  }
}
