import React, {Component} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../Link'
import events from './eventnames'
import partners from './partners'
import Scroll, {scroller} from 'react-scroll'
import _ from 'lodash'
import GoogleMapReact from 'google-map-react'
const Element = Scroll.Element
const options = {
  scrollwheel: false
}
const K_WIDTH = 25;
const K_HEIGHT = 25;
const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '4px solid #fff',
  borderRadius: K_HEIGHT,
  backgroundColor: '#ff6a6a',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: '#333',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 1
};

const AnyReactComponent = ({text}) => <div style={greatPlaceStyle}>
  <strong >
    <span style={{
      marginLeft: '30px'
    }}>{text}</span>
  </strong>
</div>
class KOK extends Component {
  static defaultProps = {
    center: {
      lat: 41.70312,
      lng: -87.64250809999999
    },
    zoom: 14
  }

  state = {
    fullHeight: false
  }

  constructor(props) {
    super(props)
    this.onClickReadMore = this.onClickReadMore.bind(this)
    this.onScroll = this.onScroll.bind(this)
  }

  onClickReadMore() {
    this.setState({fullHeight: true})
  }

  onScroll(field) {
    scroller.scrollTo(field, {
      offset: -150,
      smooth: true
    })
  }

  render() {
    return (
      <div>
        {/* Main Container */}
        <div className={`${s.container}`}>
          <div className={s.titleContainer}>
            <div className={s.overlay}></div>
            <div className={s.background}></div>
            <div className={s.containerTable}>
              <div className={`${s.content} ${s.fixed}`}>
                <h5 className={`${s.meta} ${s.headerTitle}`}>
                  <img alt='Full Icon' className={s.headerTitleImage} src="/full-icon.png" alt=""/>
                  presents
                </h5>
                <h1 className={`${s.meta} ${s.title} ${s.mainTitle}`}>Kids of the Kingdom</h1>
                <h2 className={`${s.meta} ${s.subtitle}`}>A Chicago Youth Summer School Program</h2>
                <h5 className={`${s.meta} ${s.headerSubtitle}`}>
                  Summer Music Academy presented by
                  <img alt='Landr Logo' className={s.headerBottomImage} src="https://dh136thgitkrt.cloudfront.net/landr/landr_logo_white.png" alt=""/>
                </h5>
                <div className="text-center">
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="GJ487M9MDSPUQ"/>
                    <input type="submit" className={`${s.button} ${s.mainButton}`} target="_blank" value="Support Kids of the Kingdom"/>
                  </form>
                </div>
                <span onClick={() => {
                  this.onScroll('about')
                }} className={s.scroll}>learn more</span>
              </div>
            </div>
          </div>
        </div>
        {/* About Container */}
        <div className={`${s.container} ${s.aboutContainer}`}>
          <div className={` ${s.containerTable} ${s.aboutContainerTable}`}>
            <div className={`${s.content} ${s.aboutContent}`}>
              <h3 className={`${s.meta} ${s.title} ${s.sectionTitle}`}>About Us</h3>

              <h5 className={`${s.meta} ${s.aboutSubtitle}`}>Kids of the Kingdom is a summer program for Chicago kids.

              </h5>
              <p className={`${s.meta} ${s.aboutBio}`}>Founded in 1977 by Gladys Bennett, KOK provides an outlet for recreation and socialization for Chicago youth during the summer through interactive events, field-trips, and lesson plans.</p>
              <div className="text-center">
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                  <input type="hidden" name="cmd" value="_s-xclick"/>
                  <input type="hidden" name="hosted_button_id" value="GJ487M9MDSPUQ"/>
                  <input type="submit" className={`${s.button} ${s.paypalButton}`} target="_blank" value="Support Kids of the Kingdom"/>
                </form>
              </div>
            </div>
            <Element name={`about`}/>
          </div>
        </div>
        <div className={`${s.container} ${s.registerContainer}`}>
          <div className={s.titleContainer}>
            <div className={s.overlay}></div>
            <div className={s.registerBackground}></div>
            <div className={`${s.content} ${s.quoteContent}`}>
              <h2 className={`${s.meta} ${s.title} ${s.quoteTitle}`}>
                SocialWorks and LANDR are partnering to provide students in Chicago the necessary tools to tell their stories to the world.</h2>
              <h3 className={`${s.meta} ${s.title} ${s.quoteTitleLarge}`}>
                Together, we’ll shape the musicians of tomorrow, by supporting the kids today.</h3>
              <h4 className={`${s.meta} ${s.title} ${s.quoteTitleAuthor}`}>
                  - Chance the Rapper</h4>
            </div>
          </div>
        </div>
        {/* Program Information Container */}
        <div className={`${s.container} ${s.programInfoContainer}`}>
          <div className={` ${s.containerTable} ${s.aboutContainerTable} ${s.programContainer}`}>
            <div className={`${s.content} ${s.aboutContent}`}>
              <h3 className={`${s.meta} ${s.title} ${s.sectionTitle} ${s.sessionTitle}`}>Program Information</h3>
            </div>
          </div>
          <div className={s.programList}>
            <div className="row empty-space-bottom">
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.image} ${s.programImageChanceContainer}`}>
                <img alt='Chance KOK' className={`${s.image} ${s.programImage} ${s.programImageChance}`} src="https://dh136thgitkrt.cloudfront.net/kok/eventImages/chanceandchild.jpg"/>
              </div>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.programDescription}`}>
                <div className={s.programListEvent}>
                  <div className={`${s.meta} ${s.programListEventTitle} ${s.programListEventDates}`}>Class Info</div>
                  <div className={`${s.meta} ${s.programListEventDescription}`}>Our class is capped at
                    <strong> 75 students</strong>, and enrollment will begin
                    <strong> May 15th</strong>.
                    <br/>
                    <br/>During the course of our 7-week program, students will be exposed to a variety of dynamic on-site lessons mixed with weekly field-trips, giving the children a voice through socialization and spiritual expression.</div>
                </div>
              </div>
            </div>
            <div className="row empty-space">
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.programDescription}`}>
                <div className={s.programListEvent}>
                  <div className={`${s.meta} ${s.programListEventTitle} ${s.programListEventDates}`}>Dates</div>
                  <div className={`${s.meta} ${s.programListEventDescription}`}>KOK runs from
                    <strong> June 26th - August 11th</strong>, Monday through Friday, from 9AM - 3PM.</div>
                </div>
              </div>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.image} ${s.programImageDatesContainer}`}>
                <img alt='KOK Event' className={`${s.image} ${s.programImage} ${s.programImageDates}`} src="https://dh136thgitkrt.cloudfront.net/kok/eventImages/fourkids.jpg"/>
              </div>
            </div>
          </div>
          <div className={`${s.contactContainer} empty-space-bottom`}>
            <div className={`${s.meta} ${s.programListEventTitle} ${s.programListEventDates} ${s.programContact} empty-space-top text-center`}>Contact</div>
            <p className={`${s.meta} ${s.programBio} text-center`}>Covenant Faith Church of God</p>
            <p className={`${s.meta} ${s.programBio} text-center`}>10505 S. Halsted, Chicago IL 60628</p>
            <p className={`${s.meta} ${s.programBio} text-center`}>
              <a className={`${s.meta} ${s.programBioLink}`} href="tel:773-568-2685">773-568-2685</a>
            </p>
          </div>
          <div style={{
            height: '450px',
            width: '100%'
          }}>
            <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom} options={options} bootstrapURLKeys={{
              key: `${process.env.GOOGLE_MAP || 'AIzaSyCp9IqHhi-eq2BQw8KsAXZDASa5Ap8cjKk'}`
            }}>
              <AnyReactComponent lat={41.70312} lng={-87.642508} text={'Covenant Faith Church of God'}/>
            </GoogleMapReact>
          </div>
        </div>
        {/* Landr Music Academy Information Container */}
        <div className={`${s.container} ${s.landrContainer}`}>
          <div className={`${s.containerTable} ${s.aboutContainerTable}`}>
            <div className={`${s.content} ${s.aboutContent}`}>
              <a target="_blank" href="https://join.landr.com/socialworks/"><img alt='Landr Image' className={s.landrImage} src="https://dh136thgitkrt.cloudfront.net/landr/logo-lan.png" alt=""/></a>
              <a target="_blank" href="https://join.landr.com/socialworks/"><img alt='Landr Cover' className={s.landrCover} src="https://dh136thgitkrt.cloudfront.net/landr/landr-cover.jpg" alt=""/></a>
              <h5 className={`${s.meta} ${s.aboutLandrTitle}`}>LANDR enables musicians to create and get heard.</h5>
              <hr style={{
                width: '100px',
                margin: '20px auto'
              }}/>
              <p className={`${s.meta} ${s.aboutLandrBio}`}>Using big data and machine learning to instantly master audio files, LANDR gives music creators a custom, professional master for a fraction of the cost of traditional studios.</p>
            </div>
          </div>
          <h3 className={`${s.meta} ${s.signupLandr} text-center`}>Sign up and master a track for free, and LANDR will donate $1 to the Summer Music Academy.</h3>
          <div className='text-center'><a className={s.button} target="_blank" href="https://join.landr.com/socialworks/"> Try LANDR</a></div>
          <div className={`container ${s.landrBioContainer}`}>
            <div className={`row text-center ${s.emptySpace}`}>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.colImage}`}>
                <a target="_blank" href="https://join.landr.com/socialworks/"><div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-image-4.jpg)"}}></div></a>
              </div>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.table}`}>
                      <div className={` ${s.tableCell} ${s.meta} ${s.landrBio}`}>LANDR provides creators with organization and workflow tools built for musicians, making it an invaluable creation platform for artists before, and after, releasing music.</div>
              </div>
            </div>
            <div className={`row text-center ${s.emptySpace}`}>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.colImage} hide-md hide-lg`}>
                <a target="_blank" href="https://join.landr.com/socialworks/"><div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-2.jpg)"}}></div></a>
              </div>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.table}`}>
                <div className={` ${s.tableCell} ${s.meta} ${s.landrBio}`}>LANDR's global community includes major labels WMG and Atlantic Records as well as reknowned songwriters, and was recently used by guitar legend Adrian Belew in the making of Pixar’s Piper—The 2017 Oscar Winner for Best Short Film (Animated).</div>
              </div>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.colImage} hide-sm`}>
                <a target="_blank" href="https://join.landr.com/socialworks/"><div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-2.jpg)"}}></div></a>
              </div>
            </div>
            <div className={`row text-center ${s.emptySpace}`}>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.colImage}`}>
                <a target="_blank" href="https://join.landr.com/socialworks/"><div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-image-1.jpg)"}}></div></a>
              </div>
              <div className={`col-xs-12 col-sm-6 col-md-6 col-lg-6 ${s.table}`}>
                <div className={` ${s.tableCell} ${s.meta} ${s.landrBio}`}>In the short time since launching, LANDR has garnered major awards like CNBC’s Upstart 25, CIX’s top 20, SXSW V2V, as well as press from Forbes, Fast Company, Vice and TechCrunch.
                  <br/><br/>
                  Partnerships include major music industry players like SoundCloud, TuneCore, Native Instruments, CD Baby, ASCAP and several other major PROs around the world.
              </div>
              </div>
            </div>
              {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-2.jpg)"}}></div>
              </div> */}
              {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-2.jpg)"}}></div>
                <div className={` ${s.meta} ${s.landrBio}`}>LANDR's global community includes major labels WMG and Atlantic Records as well as reknowned songwriters. LANDR was recently used by guitar legend Adrian Belew in the making of Pixar’s Piper—The 2017 Oscar Winner for Best Short Film (Animated).</div>
              </div> */}
              {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-image-3.jpg)"}}></div>
                <div className={` ${s.meta} ${s.landrBio}`}>In the short time since launching, LANDR has garnered major awards like CNBC’s Upstart 25, CIX’s top 20, SXSW V2V, as well as press from Forbes, Fast Company, Vice and TechCrunch.</div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div className={s.landrBioImage} style={{backgroundImage:"url(https://dh136thgitkrt.cloudfront.net/landr/landr-image-4.jpg)"}}></div>
                <div className={` ${s.meta} ${s.landrBio}`}>Partnerships include major music industry players like SoundCloud, TuneCore, Native Instruments, CD Baby, ASCAP and several other major PROs around the world.</div>
              </div> */}

          </div></div>
        {/* Partnerships Container */}
        <div className={`${s.container} ${s.partnershipsContainer}`}>
          <div className={`${s.content} ${s.partnershipsContent}`}>
            <h3 className={`${s.meta} ${s.title} ${s.sectionTitle} ${s.partnerTitle}`}>Partnerships</h3>
            <div className="row">
              {_.map(partners, url => {
                return (
                  <div key={url} className={`col-xs-12 col-sm-6 col-md-4 col-lg-3`}>
                    <div className={`${s.partnerCardContainer}`}>
                      <div className={`${s.partnerCard}`} style={{
                        height: '200px',
                        backgroundImage: `url(${url})`
                      }}></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(KOK)
