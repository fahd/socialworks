import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './WarmestWinter.css'
import Waypoint from 'react-waypoint'
import CountUp from 'react-countup'
import Gallery from 'react-photo-gallery'
import {PHOTO_SET} from './photoSet.js'
// import main from './main'

const isInViewport = (el) => {
  var rect = el.getBoundingClientRect();
  var html = document.documentElement;
  return (rect.top >= (window.innerHeight || html.clientHeight) && rect.left >= 0 && rect.bottom <= 0 && rect.right <= (window.innerWidth || html.clientWidth));
}

class WarmestWinter extends React.Component {
  state = {
    money: <span>$0</span>,
    coats: <span>0</span>,
    setCount: false,
    videoHide: true
  }

  constructor(props) {
    super(props)
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
    this._handleWaypointLeave = this._handleWaypointLeave.bind(this)
    this.onClickVideo = this.onClickVideo.bind(this)
  }

  _handleWaypointEnter() {
    if (!this.state.setCount) {
      this.setState({
        setCount: true, money: <span>$<CountUp start={0} end={117517} separator="," useGrouping={true} duration={2} useEasing={false}/></span>,
        coats: <span><CountUp start={0} end={1175} separator="," decimal="," useGrouping={true} duration={2} useEasing={false}/></span>
      })
    }
  }

  onClickVideo() {
    this.setState({videoHide: false})

  }

  _handleWaypointLeave() {}

  render() {
    let videoHide = this.state.videoHide

    return (
      <div className='init-header'>
        <div className={`${s.header}`}>
          <div className={`${s['header-photo']}`}></div>
          <div className={`${s['header-overlay']}`}></div>
          <div className={`container ${s['header-container']} ${s['text-center']} ${s['fade-in']}`}>
            <div className='row'>
              <div className={`col-sm-12 col-md-12 ${s['header-meta']}`}>
                <h4 className={`${s.meta} ${s.subtitle} ${s['ww-subtitle']}`}>TOGETHER WE RAISED OVER 1,000 EMPWR COATS FOR CHICAGO'S HOMELESS</h4>
                <h1 className={`${s.meta} ${s['ww-title']}`}>Warmest Winter Chicago: EMPWR Coat Initiative</h1>
              </div>
            </div>
          </div>
        </div>

        <div className={`container ${s['main-header-container']}`}>
          <div className={`row empty-space-bottom`}>
            <h2 className={`${s.meta} ${s.title} ${s['ww-header']}`}>Chance The Rapper and The Empowerment Plan partner to bring EMPWR coats to Chicago</h2>
            <div className='col-md-8'>
              <div className={`${s.intro}`}>
                <div className={`${s['slogan']} ${s.meta} ${s['header-subtitle']} `}>
                  <div className={`${s['header-description']} ${s['header-about']}`}>
                    Warmest Winter is a seasonal initiative inspiring others through service.
                  </div>
                  <div data className={`${s['header-description']} ${s['header-about']}`}>When this initiative launched in December of 2015, Chance wanted to give Chicago's highly mobile community a special coat that was practical and able to withstand Chicago's harsh winters.</div>
                  <div data className={`${s['header-description']} ${s['header-about']}`}>With the help of a Detroit non-profit, The Empowerment Plan, we were going to be able to provide a water-resistant and self-heating coat that could transform into a sleeping bag and be worn as an over-the-shoulder bag when it is not in use.</div>
                  <div data className={`${s['header-description']} ${s['header-about']}`}> Chance the Rapper and The Empowerment Plan presented the Warmest Winter initiative in hopes of bringing 1,000 coats to the homeless, but together we did a lot more.</div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <div className={`${s.intro} text-center`}>
                <img alt='header logo' className={`${s.media}`} style={{
                  width: '100%'
                }} src='https://dh136thgitkrt.cloudfront.net/warmestwinter/WarmestWinterCoat.png' alt=''/>
              </div>
            </div>
          </div>
        </div>

        <div className={`${s['parade-numbers']}`}>
          <div className={`${s['parade-media']} ${s['parade-cover-block']}`}>
            <div className={`numbers ${s['numbers-header']}`}>
              <div className={`${s['numbers-bg']}`}></div>
              <div className={`${s['numbers-overlay']}`}></div>
              <div className={`container ${s['numbers-container']} ${s['text-center']} ${s['fade-in']}`}>
                <div className='row'>
                  <div className={`col-sm-12 col-md-12 ${s['header-meta']}`}>
                    <h2 className={`${s.meta}  ${s['numbers']}`}>Achievements</h2>
                    <Waypoint onEnter={this._handleWaypointEnter}/>
                    <div className={`${s['numbers-content']}`}>
                      <div className={`${s['total-raised']} ${s.stats}`}>
                        <h3 className={`money-raised ${s.meta}  ${s['numbers']} ${s['ww-numbers-title']}`}>
                          {this.state.money}
                        </h3>
                        <h5 className={`${s.meta}  ${s['numbers']} ${s['ww-numbers-subtitle']}`}>Money Raised</h5>
                      </div>
                      <div className={`${s['coats-raised']} ${s.stats}`}>
                        <h3 className={`coats-raised ${s.meta}  ${s['numbers']} ${s['ww-numbers-title']}`}>
                          {this.state.coats}
                        </h3>
                        <h5 className={`${s.meta} ${s['numbers']} ${s['ww-numbers-subtitle']}`}>Coats Sponsored</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${s['container']} empty-space-bottom`}>
              <div className={`${s['content']}`}>
                <h3 className={`${s.meta} ${s.title} ${s['analysis-title']}`}>
                  Statistics on Chicago homelessness
                </h3>
                <div className={`${s['slogan']} ${s.meta} ${s['header-subtitle']} empty-space-top`}>
                  <div data className={` ${s['header-description']}`}>An analysis by Chicago Coalition for the Homeless estimates that 125,848 Chicagoans were homeless in the course of the 2014-15 school year. This is partly based on the 20,205 homeless students who were identified by Chicago Public Schools (CPS).
                  </div>
                  <div data className={`${s['header-description']}`}>Another 11.3% of students (2,279) lived in shelters, and 1.7% lived in motels (136), in a park or other “public place” (55), or in a temporary foster care placement (163).
                  </div>
                  <div data className={`${s['header-description']}`}>Source - Chicago Coalition for the Homeless
                  </div>
                </div>
              </div>
            </div>

            <div className={`${s.header} ${s['empwr-header']}`}>
              <div className={`${s['header-photo']} ${s['empwr-photo']}`}></div>
              <div className={`${s['empwr-overlay']}`}></div>
            </div>

            <div className={`${s['parade-cover-meta']}`}>
              <div className={`container ${s['statistics-container']}`}>
                <div className={`${s['meta-middle']} ${s['coats-header']}`}>
                  <h2 className={`${s.meta} ${s.title} ${s['coats-title']}`}>The Empowerment Plan Coat</h2>
                </div>
                <div className={`row`}>
                  <div className={`col-md-4`}>
                    <div>
                      <div className={`${s['logo-left']}`}>
                        <i className={`fa fa-2x fa-tint ${s['coat-label']}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${s.meta} ${s['analysis-text']}`}>
                        The EMPWR coat is a water-resistant and self-heating jacket, which can transform into a sleeping bag, or be worn as an over-the-shoulder bag when not in use
                      </div>

                    </div>
                  </div>
                  <div className={`col-md-4`}>
                    <div>
                      <div className={`${s['logo-left']}`}>
                        <i className={`fa fa-2x fa-recycle ${s['coat-label']}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${s.meta} ${s['analysis-text']}`}>
                        The coat is constructed of upcycled automotive insulation, fabric from Carhartt, and other materials provided by generous donors.
                      </div>

                    </div>
                  </div>
                  <div className={`col-md-4`}>
                    <div className={`${s['logo-left']}`}>
                      <i className={`fa fa-2x fa-life-ring ${s['coat-label']}`} aria-hidden="true"></i>
                    </div>
                    <div className={`${s.meta} ${s['analysis-text']}`}>
                      The Empowerment Plan can produce 1,000 coats on a budget of $100,000. Our studies show that for each 1,000 coats distributed, we can save 14 lives.

                    </div>
                  </div>
                </div>
                <div className={`row`}>
                  <div className={`col-md-4`}>
                    <div>
                      <div className={`${s['logo-left']}`}>
                        <i className={`fa fa-2x fa-thermometer-full ${s['coat-label']}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${s.meta} ${s['analysis-text']}`}>
                        Each year approximately 7% of homeless individuals die from hypothermia. Our coat reduces this statistic by over 20%
                      </div>

                    </div>
                  </div>
                  <div className={`col-md-4`}>
                    <div>
                      <div className={`${s['logo-left']}`}>
                        <i className={`fa fa-2x fa-users ${s['coat-label']}`} aria-hidden="true"></i>
                      </div>
                      <div className={`${s.meta} ${s['analysis-text']}`}>
                        It costs $100 to sponsor a coat, which covers the cost of labor, materials, and overhead expenses.
                      </div>

                    </div>
                  </div>
                  <div className={`col-md-4`}>
                    <div className={`${s['logo-left']}`}>
                      <i className={`fa fa-2x fa-handshake-o ${s['coat-label']}`} aria-hidden="true"></i>
                    </div>
                    <div className={`${s.meta} ${s['analysis-text']}`}>
                      While these coats will save lives this winter, our ultimate partnership goal is to bring an Empowerment Plan factory to Chicago.
                    </div>
                  </div>
                </div>
                <div className={`row ${s['empty-space-top']}`}>
                  <div className={`${s.gallery}`}>

                  </div>
                </div>
                <div className={`row ${s['empty-space']}`}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${s['video-container']} container-fluid`}>
          <div className='row'>
            <div className={`col-sm-12 col-md-12 ${s['col-top']} hide-lg`}>
              <iframe className={`${s.iframe} ${videoHide
                ? null
                : `${s['show-video']}`}`} autoPlay src={`https://www.youtube.com/embed/mo-kvh1w60w?controls=0&showinfo=0${videoHide
                ? ''
                : '?autoplay=1'}`} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className={`${s['col-table']} col-sm-12`}>
              <div className={`${s['empwr-content']} ${s['pull-left']}`}>
                <h2 className={`${s['video-title']} ${s['meta']} `}>About the Cause</h2>

                <span className={`${s['meta']} ${s['cause-subtitle']} ${s['empty-space']} `}>The Empowerment Plan is a Detroit-based nonprofit organization dedicated to serving the homeless community.
                  <br/><br/>Our goal is to help build a better life for those that have become trapped in the cycle of homelessness.
                  <br/><br/>
                  We mostly hire homeless parents from local shelters to become full time seamstresses so that they can earn a stable income, find secure housing, and gain back their independence for themselves and for their families.</span>
              </div>
              <div className={`${s['col-video']} ${s['table-video']} hide-sm`}>
                <iframe className={`${s.iframe} ${videoHide
                  ? null
                  : `${s['show-video']}`}`} autoPlay src={`https://www.youtube.com/embed/mo-kvh1w60w?controls=0&showinfo=0${videoHide
                  ? ''
                  : '?autoplay=1'}`} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(WarmestWinter)
