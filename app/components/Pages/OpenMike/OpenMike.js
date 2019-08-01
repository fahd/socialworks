import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './OpenMike.css'
import Link from '../../Link'
import Waypoint from 'react-waypoint'
import CountUp from 'react-countup'

class OpenMike extends React.Component {

  state = {
    addSlide: false,
    openmikes: <span>0</span>,
    minutes: <span>0</span>,
    attended: <span>0</span>,
    fade: false,
    fadeTitle: false,
    fadeNews: false,
    isLoaded: false,
    hideVideo: false
  }

  constructor(props) {
    super(props)
    this._handleWaypointEnter = this._handleWaypointEnter.bind(this)
    this.onFade = this.onFade.bind(this)

  }

  _handleWaypointEnter() {
    if (!this.state.addSlide) {
      this.setState({
        addSlide: true, openmikes: <span className={`${s['stats-color']}`}><CountUp start={0} end={27} duration={1} useEasing={false}/></span>,
        minutes: <span className={`${s['stats-color']}`}><CountUp start={0} end={3300} separator="," decimal="," useGrouping={true} duration={1.3} useEasing={false}/></span>,
        attended: <span className={`${s['stats-color']}`}><CountUp start={0} end={6532} separator="," decimal="," useGrouping={true} duration={1.3} useEasing={false}/></span>
      })
    }
  }

  onFade(element) {
    switch (element) {
      case 'fadeTitle':
        return this.setState({fadeTitle: true})
      case 'fadeNews':
        return this.setState({fadeNews: true})
    }
  }

  componentWillMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/.test(navigator.userAgent)) {
      this.setState({hideVideo: true})
    }
  }

  componentDidMount() {

  }

  render() {
    let videoAutoplay = (
      <video autoPlay="true" loop="true" className={`${s['video-bg']}`}>
        <source src="/assets/img/openmike.mp4" type="video/mp4"/>
      </video>
    )
    return (
      <div>
        <div>
          <div className={`${s.container}`}>
            <div className={s.bg}></div>
            <div className={s.overlay}></div>
            {this.state.hideVideo
              ? ''
              : videoAutoplay}
            <div className={`container ${s['header-container']}`}>
              <div className={`${s['container-table']}`}>
                <div className={`${s['header-content']}`}>
                  <div className='container'>
                    <div className={`${s['header-text']}`}>
                      <div className={`${s['logo-container']}`}>
                        <img alt='Header Image' className={`${s['header-image']}`} src='https://dh136thgitkrt.cloudfront.net/openmike/openmike-full-logo.png' alt=''/>
                      </div>
                      <div className={`${s.meta}`}>
                        <h3 className={`${s.meta} ${s.subtitle} ${s.aboutOpenMike}`}>A monthly OpenMike in collaboration with the Chicago Public Library housed in the Cindy Pritzker Auditorium
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container ${s['title-container']} container-hide ${s['openmike-container']} ${this.state.fadeTitle
          ? 'fadeIn'
          : ''}`}>
          <div className={`${s['text-content']}`}>
            <div className={`${s['text-header']}`}></div>
            <Waypoint onEnter={() => this.onFade('fadeTitle')}/>
            <div className='row empty-space-bottom'>
              <h1 className={`${s['text-title']} ${s['openmike-title']}`}>OpenMike: Chicago Open Mic for Youth</h1>
              <div>
                <div className={`${s['text-body-header']}`}>

                  <div className={`${s['text-body']}`}>
                    <span>Every month we partner with the Chicago Public Library to present a safe space for high schools students to share, express, and network with like-minded individuals.</span>
                    <br/><br/>
                    <span>This event, housed in the Pritzker Auditorium, showcases randomly selected students to present a 3-minute piece of their choice. Afterwards, we bring our friends to perform, teach, and inspire.</span>


                    <br/><br/>
                    <span>OpenMike often closes with professionals sharing about their creative process and pieces of their choosing.</span>
                  </div>

                </div>
              </div>
            </div>
            <div className='row'>
              <div className={`${s['register-button']} text-center col-sm-12 col-md-12`}>
                <div className={`${s['text-body']}`}>
                  <a className={`${s['register-link']} ${s['button']}`} target="_blank" href='http://socialworks.eventbrite.com'>Register for OpenMike
                    <i className={`fa fa-angle-right ${s.fa}`}></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${s['statistics-container']}`}>
          <div className={`${s['statistics-bg']}`}></div>
          <div className={`${s['statistics-overlay']}`}></div>

          <div className={`container ${s['title-container']}`}>
            <div className={`empty-space-top ${s['text-content']}`}>
              {/* <div className={`${s['text-header']} `}>
              <h4 className={`${s['text-title']} ${s['text-stats-title']}`}>Statistics</h4>
            </div> */}
              <Waypoint onEnter={this._handleWaypointEnter}/>

              <div className={`row empty-space-bottom ${s['row-stats']}`}>
                <div className='col-sm-4 col-md-4 empty-space'>
                  <div className={`${s['text-body']} ${s['text-stats-container']} ${this.state.addSlide
                    ? `${s.slideUp}`
                    : ''} `}>
                    <div className={`${s['text-stats']} empty-space-top`}>{this.state.openmikes}</div>
                    <div className={` ${s['text-stats-body']} `}>OpenMikes</div>
                  </div>
                </div>
                <div className='col-sm-4 col-md-4 empty-space'>
                  <div className={`${s['text-body']} ${s['text-stats-container']} ${this.state.addSlide
                    ? `${s.slideUp}`
                    : ''} `}>
                    <div className={`${s['text-stats']} empty-space-top`}>{this.state.minutes}</div>
                    <div className={`${s['text-stats-body']} `}>Total Minutes of Performance</div>
                  </div>
                </div>
                <div className='col-sm-4 col-md-4 empty-space'>
                  <div className={`${s['text-body']} ${s['text-stats-container']} ${this.state.addSlide
                    ? `${s.slideUp}`
                    : ''} `}>
                    <div className={`${s['text-stats']} empty-space-top`}>{this.state.attended}</div>
                    <div className={`${s['text-stats-body']} `}>Total Attendance</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className={`container ${s['title-container']} pad-vertical container-hide ${this.state.fadeNews
          ? 'fadeIn'
          : ''}`}>
          <div className={` ${s['text-content']}`}>
            <div className={`${s['text-header']}`}>
              <h3 className={`${s['text-subtitle']}`}>In the news</h3>
            </div>
          </div>
          <Waypoint onEnter={() => this.onFade('fadeNews')}/>
          <div className='row'>
            <div className={`col-sm-6 col-md-4 ${s['news-item']} empty-space-bottom`}>
              <a target="_blank" className={`${s['news-link']}`} href='http://www.thefader.com/2015/07/17/malcolm-london-interview-chance-the-rapper-open-mikes'>
                <div className={`${s['card-container']}`}>
                  <div style={{
                    height: '300px'
                  }} className={`${s['card-image-container']}`}>
                    <div className={`${s['card-image']} ${s['card-fader']}`}></div>
                  </div>
                  <div className={`${s['card-text']}`}>
                    <div className={`${s['card-text-content']}`}>
                      <div className={`${s['card-meta']}`}>
                        <div className={`${s['card-icon']} ${s['icon-fader']}`}></div>
                        <div className={`${s['card-brand']}`}>The FADER</div>
                      </div>
                      <h3 className={`${s['card-text-title']}`}>
                        The Inspiring Story Behind Chance the Rapper And Malcolm London’s Open Mike Nights</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={`col-sm-6 col-md-4 ${s['news-item']} empty-space-bottom`}>
              <a target="_blank" className={`${s['news-link']}`} href='http://djbooth.net/news/entry/2016-12-06-i-went-to-chance-the-rapper-open-mike-chicago'>
                <div className={`${s['card-container']}`}>
                  <div style={{
                    height: '300px'
                  }} className={`${s['card-image-container']}`}>
                    <div className={`${s['card-image']} ${s['card-booth']}`}></div>
                    {/* <div className={`${s['card-image-overlay']}`}></div>
                    <div className={`${s['card-image-text']}`}>I Went to Chance The Rapper’s Open Mike to Celebrate the Legacy & Future of Chicago Artists</div> */}
                  </div>
                  <div className={`${s['card-text']}`}>
                    <div className={`${s['card-text-content']}`}>
                      <div className={`${s['card-meta']}`}>
                        <div className={`${s['card-icon']} ${s['icon-booth']}`}></div>
                        <div className={`${s['card-brand']}`}>DJBOOTH.net</div>
                      </div>
                      <h3 className={`${s['card-text-title']}`}>I Went to Chance The Rapper’s Open Mike to Celebrate the Legacy & Future of Chicago Artists</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className={`col-sm-6 col-md-4 ${s['news-item']} empty-space-bottom`}>
              <a target="_blank" className={`${s['news-link']}`} href='http://www.chicagotribune.com/entertainment/ct-chance-the-rapper-open-mic-nostalgia-20150306-story.html'>
                <div className={`${s['card-container']}`}>
                  <div style={{
                    height: '300px'
                  }} className={`${s['card-image-container']}`}>
                    <div className={`${s['card-image']} ${s['card-chicago']}`}></div>
                    {/* <div className={`${s['card-image-overlay']}`}></div>
                      <div className={`${s['card-image-text']}`}>Chance the Rapper hosts open mic night</div> */}
                  </div>
                  <div className={`${s['card-text']}`}>
                    <div className={`${s['card-text-content']}`}>
                      <div className={`${s['card-meta']}`}>
                        <div className={`${s['card-icon']} ${s['icon-chicago-tribune']}`}></div>
                        <div className={`${s['card-brand']}`}>The Chicago Tribune</div>
                      </div>

                      <h3 className={`${s['card-text-title']}`}>Chance the Rapper hosts open mic night</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={`${s['mike-container']}`}>
          <div className={`${s['mike-bg']}`}></div>
          <div className={`${s['mike-youmedia']}`}></div>
          <div className={`${s['mike-overlay']}`}></div>
          <div className={`container ${s['header-container']} ${s['mike-content']}`}>
            <div className={`row ${s['container-table']}`}>
              <div className={`${s['header-content']}`}>
                <div className={`${s['mike-text-container']}`}>
                  <div className={`${s.meta}`}>
                    <div className={`${s.meta} ${s.subtitle} ${s['mike-text']}`}>OpenMike is named in honor of a very special mentor of ours, the late
                      <strong> “Brother Mike” Hawkins</strong>.
                    </div>
                    <div className={`${s.meta} ${s.subtitle} ${s['mike-text']}`}>SocialWorks’ inspiration came from Brother Mike; he educated, connected, and inspired us to pursue our passions through artistic expression.
                    </div>
                    <div className={`${s.meta} ${s.subtitle} ${s['mike-text']}`}>We want to celebrate and expand Brother Mike’s vision. OpenMike aims to teach showmanship, connect young artists, and inspire creativity within the next wave of Chicago youth.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container ${s['title-container']} ${s['rules']}`}>
          <div className={` ${s['text-content']}`}>
            <div className='row'>
              <div className={`${s['text-header']} text-center empty-space-bottom`}>
                <h2 className={`${s['text-title']} ${s['rules-header']}`}>Power to the People! Right On!</h2>
              </div>
              <div className={`col-sm-6 col-md-6 ${s['news-item']} empty-space-bottom`}>

                <div className={`${s['rules-container']}`}>
                  <div style={{
                    height: '200px'
                  }} className={`${s['rules-image-container']}`}>
                    <div className={`${s['card-image']} ${s['rules-image']}`} style={{
                      backgroundImage: "url('https://dh136thgitkrt.cloudfront.net/openmike/open-mike-equal.jpg')"
                    }}></div>
                    {/* <div className={`${s['card-image-overlay']}`}></div>
                        <div className={`${s['card-image-text']}`}>The Inspiring Story Behind Chance the Rapper And Malcolm London’s Open Mike Nights</div> */}
                  </div>

                  <div className={`${s['card-text-content']} ${s['rules-container']}`}>
                    <h3 className={`${s['card-text-title']} ${s['rules-title']}`}>
                      No racist, sexist, homophobic, gender-biased, ableist, ageist or transphobic language allowed.
                    </h3>
                  </div>

                </div>

              </div>
              <div className={`col-sm-6 col-md-6 ${s['news-item']} empty-space-bottom`}>

                <div className={`${s['rules-container']}`}>
                  <div style={{
                    height: '200px'
                  }} className={`${s['rules-image-container']}`}>
                    <div className={`${s['card-image']} ${s['rules-image']}`} style={{
                      backgroundImage: "url('https://dh136thgitkrt.cloudfront.net/openmike/open-mike-respect.jpg')"
                    }}></div>
                    {/* <div className={`${s['card-image-overlay']}`}></div>
                        <div className={`${s['card-image-text']}`}>The Inspiring Story Behind Chance the Rapper And Malcolm London’s Open Mike Nights</div> */}
                  </div>

                  <div className={`${s['card-text-content']} ${s['rules-container']}`}>
                    <h3 className={`${s['card-text-title']} ${s['rules-title']}`}>
                      Respect the mic, respect the time, respect the space.
                    </h3>
                  </div>

                </div>

              </div>
            </div>
            <div className='row empty-space-bottom'>
              <div className={`col-sm-12 col-md-12 ${s['news-item']} empty-space-bottom`}>
                <div className={`${s['rules-container']}`}>
                  <div style={{
                    height: '200px'
                  }} className={`${s['rules-image-container']} ${s['rules-image-single']}`}>
                    <div className={`${s['card-image']} ${s['rules-image']}`} style={{
                      backgroundImage: "url('https://dh136thgitkrt.cloudfront.net/openmike/open-mike-language.jpg')"
                    }}></div>
                    {/* <div className={`${s['card-image-overlay']}`}></div>
                        <div className={`${s['card-image-text']}`}>The Inspiring Story Behind Chance the Rapper And Malcolm London’s Open Mike Nights</div> */}
                  </div>

                  <div className={`${s['card-text-content']} ${s['rules-container']} empty-space-top`}>
                    <div>
                      <h3 className={`text-center ${s.meta} ${s.subtitle} ${s['dark']} ${s['sub-register']}`}>This is your stage, your crowd, your community.</h3>
                    </div>
                    <div className={`${s['action-button-container']} text-center`}>
                      <a className={`${s['action-button']} ${s['register-link']} ${s['button']}`} target="_blank" href='http://socialworks.eventbrite.com'>
                        Register For OpenMike
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${s['feedback-container']}`}>
          <div className={s['feedback-overlay']}></div>
          <div className={s['feedback-bg']}></div>
          <div className={`${s['header-container']} ${s['typeform-container']}`}>
            <div className={`${s['container-table']}`} style={{
              width: '100%'
            }}>
              <div className={`${s['header-content']}`}>
                <div className={`${s['header-text']}`}>
                  <div className={`${s.meta}`}>
                    <div>
                      <h3 className={`text-center ${s.meta} ${s.subtitle} ${s['sub-feedback']}`}>Help Us Improve</h3>
                    </div>
                    <div className={`${s['action-button-container']} text-center`}>
                      <a className={`text-center ${s['button']} ${s['button-red']}`} target="_blank" href='https://euros1.typeform.com/to/gzqxCE'>
                        Leave Feedback {/* <i className={`fa fa-thumbs-o-up ${s.fa}`}></i> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div id='twine' className={`container twineSocial ${s['title-container']}`}></div> */}
      </div>
    )
  }
}

export default withStyles(s)(OpenMike)
