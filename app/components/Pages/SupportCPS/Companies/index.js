import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../../Link'
import Waypoint from 'react-waypoint'
import brands from '../brands'
import _ from 'lodash'
import Dropdown from 'react-dropdown'
import brandnames from '../brandnames'
import CountUp from 'react-countup'
import Scroll from 'react-scroll'
const scroll = Scroll.animateScroll
const scroller = Scroll.scroller
const Element = Scroll.Element

class Container extends React.Component {
  state = {
    brandText: '',
    addSlide: false,
    showButton: false,
    brandURL: '',
    warningMessage: false,
    moneyRaised: <h3 className={`${s.title} ${s['volunteer-title']}`}>$0</h3>,
    fade: false
  }
  constructor(props) {
    super(props)
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
    this._handleFadeIn = this._handleFadeIn.bind(this)
    this.onFade = this.onFade.bind(this)
  }

  onFade(element) {
    switch (element) {
      case 'fadeLetter':
        return this.setState({fadeLetter: true})
    }
  }


  _handleWaypointEnter() {
    if (!this.state.addSlide) {
      this.setState({
        addSlide: true, moneyRaised: <h3 className={`${s.title} ${s['volunteer-title']}`}>$<CountUp start={0} end={2224471} separator="," decimal="," useGrouping={true} duration={2} useEasing={false}/>
               <br/>raised, and counting.</h3>
      })
    }
  }
  _handleFadeIn() {
    if (!this.state.fade) {
      this.setState({
        fade: true
      })
    }
  }

  componentDidMount() {
    if (this.props.showCompanies) {
      scroller.scrollTo('brands')
    }
  }

  onSelectBrand(brandText) {
    let brand = brandText.value
    switch (brand) {
      case 'Adidas':
        window.open('https://ctt.ec/pW0Kd')
        break;
      case 'Allstate':
        window.open('https://ctt.ec/ja40t')
        break;
      case 'Amazon':
        window.open('https://ctt.ec/9drp7')
        break;
      case 'Boeing':
        window.open('https://ctt.ec/Nk1mf')
        break;
      case 'Chipotle':
        window.open('https://ctt.ec/JmN9a')
        break;
      case 'Comcast':
        window.open('https://ctt.ec/H214Z')
        break;
      case 'Costco':
        window.open('https://ctt.ec/dWxkP')
        break;
      case "Dunkin' Donuts":
        window.open('https://ctt.ec/C0hd8')
        break;
      case "Groupon":
        window.open('https://ctt.ec/6UZb1')
        break;
      case "IBM":
        window.open('https://ctt.ec/_Jc6R')
        break;
      case 'Jordan Brand':
        window.open('https://ctt.ec/L396I')
        break;
      case "McDonald's":
        window.open('https://ctt.ec/atQ8e')
        break;
      case "Old Navy":
        window.open('https://ctt.ec/tW2K0')
        break;
      case 'Pepsi':
        window.open('https://ctt.ec/a0q4V')
        break;
      case 'Popeyes':
        window.open('https://ctt.ec/8Vhk5')
        break;
      case 'Procter & Gamble':
        window.open('https://ctt.ec/Oc0au')
        break;
      case 'Puma':
        window.open('https://ctt.ec/05KNf')
        break;
      case 'Red Lobster':
        window.open('https://ctt.ec/w8859')
        break;
      case 'SoundCloud':
        window.open('https://ctt.ec/ffw5i')
        break;
      case 'Snapchat':
        window.open('https://ctt.ec/3cbae')
        break;
      case 'Starbucks':
        window.open('https://ctt.ec/xViao')
        break;
      case 'Subway':
        window.open('https://ctt.ec/5nZ0q')
        break;
      case 'Tidal':
        window.open('https://ctt.ec/36C6j')
        break;
      case 'Uber':
        window.open('https://ctt.ec/d2n2i')
        break;
      case 'Under Armour':
        window.open('https://ctt.ec/672c0')
        break;
      case 'United':
        window.open('https://ctt.ec/jEc79')
        break;
      case 'Walgreens':
        window.open('https://ctt.ec/uiw_0')
        break;
      case 'Walmart':
        window.open('https://ctt.ec/L8Xqp')
        break;
      case 'Whole Foods':
        window.open('https://ctt.ec/e2Csy')
        break;
      case "Verizon Wireless":
        window.open('https://ctt.ec/UXa08')
        break;
      case "Victoria's Secret":
        window.open('https://ctt.ec/IbnFb')
        break;
      case "Add another brand!":
        window.open('https://ctt.ec/c4N0R')
    }
  }

  render() {
    return (
      <div>
      <Waypoint onEnter={this._handleFadeIn}/>
        <div className={`${s.header} container-hide ${this.state.fade
          ? 'fadeIn'
          : ''}`}>
          {/* <div className={`${s['cps-cover']}`}>
            <div className={`${s['cps-cover-bg']}`}></div>
            <div className={`${s['cps-cover-overlay']}`}></div>
            <div className={`${s['container']}`}>
              <Waypoint onEnter={this._handleWaypointEnter}/>
              <div className={`row container-table ${s['header-row']}`}>
                <div className={`${s['header-content']}`}>
                  <div className={`${s['meta-light']} ${s['header-text']} text-center`}>
                    {this.state.moneyRaised}
                  </div>
                </div>
              </div>

            </div>
          </div> */}
          <div className={`container ${s['header-container']} ${s['fade-in']} `}>

            <div className={`${s['parade-title-content']} ${s.meta} empty-space`}>
              <div className={`${s['parade-title-text']}`}>
                <h3 className={`${s['meta']} text-center ${s['text-title']}`}>Invest in us as we've invested in you.</h3>
                <h5 className={`${s['meta']} text-center ${s['text-subtitle']}`}>A message from the children of Chicago.</h5>
              </div>
            </div>

            <Element name={`brands`}/>
            <div className={`row ${s['empty-space']} ${s['brands']}`}>
              <div className={`col-sm-12 col-md-12 ${s['invest-text']}`}>
                <div className={`${s['meta']} ${s['invest-subtitle']} `}>On February 27th, 2017, public school students called upon the brands below to invest in their education as they have invested into their businesses. Stand in solidarity with Chicago’s public school students and help make their voices heard!
                  <br/>
                  <br/>
                  Email us at
                  <a className={`${s['contact-info']}`} href="mailto:info@socialworkschi.com">info@socialworkschi.com</a>
                  to suggest other brands you’d like to see support CPS.
                </div>
                <div>
                  <div style={{
                    'textAlign': 'center'
                  }}></div>

                </div>
              </div>

              <div className={`${s['col-brand-button']}`}>

                  <Dropdown value={this.state.brandText} className='cps-dropdown' onChange={this.onSelectBrand} placeholder={'Select a brand'} className='event-datetime' options={brandnames}/><br/>


                <div className={`${s['outcome']}`}>
                  <div className={`${s['meta']} ${s['outcome-subtitle']} `}>
                    Each donation will go directly to the Chicago Public School Foundation. These funds will be used to strengthen curriculum, provide materials for student support, create enrichment opportunities, and help evaluate performance to hold CPS accountable towards maintaining high standards.
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Container)
