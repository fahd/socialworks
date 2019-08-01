import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../Link'
import Banner from './Banner'
import BannerSlider from './BannerSlider'
import Companies from './Companies'
import TabPanel from './TabPanel'
import superagent from 'superagent'

class SupportCPS extends React.Component {
  render () {
    return (
      <div>
        <BannerSlider/>
        <TabPanel index={this.props.startIndex}/>
      </div>

    )
  }
}

export default withStyles(s)(SupportCPS)
