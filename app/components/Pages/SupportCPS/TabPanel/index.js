import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs'
import Letters from './Letters'
import Fund from './Fund'
import School from './School'
import Supporters from './Supporters'
import Companies from '../Companies'
import Link from '../../../Link'
import { browserHistory } from 'react-router'
import Scroll from 'react-scroll'
const scroll = Scroll.animateScroll
const scroller = Scroll.scroller
const Element = Scroll.Element

class SupportCPS extends React.Component {

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(route) {
    var height = (document.documentElement.clientHeight * 0.90)-75;
    browserHistory.push(`/${route}`)
    scroll.scrollTo(height)
  }

  componentDidMount(){
    var height = (document.documentElement.clientHeight * 0.90)-75;
    if (this.props.index > -1){
      return scroll.scrollTo(height)
    } else {
      return scroller.scrollTo('Tabs', { offset: -50, smooth: true })
    }
  }

  render() {
    return (
      <div>
        <Tabs className={`${s['tabs']} tabPanel`} onSelect={this.handleSelect} selectedIndex={this.props.index !== undefined ? this.props.index : undefined}>
          <TabList className={`${s['tab-headers']}`} style={{
            'overflow': 'scroll'
          }}>
            <Tab onClick={()=>{this.onClick('supportcps/newchance')}}>New Chance</Tab>
            <Tab onClick={()=>{this.onClick('supportcps/reform')}}>#supportCPS</Tab>
            <Tab onClick={()=>{this.onClick('supportcps/brands')}}>Reach Out</Tab>
            <Tab onClick={()=>{this.onClick('supportcps/schools')}}>Schools Affected</Tab>
            <Tab onClick={()=>{this.onClick('supportcps/supporters')}}>Our Supporters</Tab>
          </TabList>
          <TabPanel >
            <Fund/>
          </TabPanel>
          <TabPanel>
            <Letters/>
          </TabPanel>
          <TabPanel>
            <Companies/>
          </TabPanel>
          <TabPanel>
            <School/>
          </TabPanel>
          <TabPanel>
            <Supporters/>
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default withStyles(s)(SupportCPS)
