import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Parade.css'
import ParadeImageSlider from './ParadeSlider.js'
import BrandSlider from './BrandSlider'

class Parade extends React.Component {
  state = {
    videoHide: true,
    paused: false,
    pausedIcon: false,
    hideVideo: false
  }

  constructor(props) {
    super(props)

    this.onClickVideo = this.onClickVideo.bind(this)
    this.onCloseVideo = this.onCloseVideo.bind(this)
    this.playVideo = this.playVideo.bind(this)
    this.togglePauseVideo = this.togglePauseVideo.bind(this)

  }

  componentWillMount() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/.test(navigator.userAgent)) {
      this.setState({hideVideo: true})
    }
  }

  onClickVideo() {
    this.setState({videoHide: false})
    this.playVideo()
  }

  onCloseVideo() {
    this.refs.parade.pause()
    this.setState({videoHide: true, pausedIcon: false})
  }

  playVideo() {
    this.refs.parade.play()
  }

  togglePauseVideo() {
    if (!this.state.paused) {
      this.setState({paused: true, pausedIcon: true})
      this.refs.parade.pause()
    } else {
      this.setState({paused: false, pausedIcon: false})
      this.playVideo()
    }
  }

  toggleVideo() {}
  render() {
    let videoHide = this.state.videoHide
    let pausedIcon = this.state.pausedIcon
    let videoAutoplay = (
      <video autoPlay="true" loop="true" className={`${s['video-bg']}`}>
        <source src="/assets/img/parade.mp4" type="video/mp4"/>
      </video>
    )

    return (
      <div className={`${s['parade-container']}`}>
        <div className={`${s['parade-media']} ${s['parade-cover-block']}`}>
          <div className={`${s['parade-cover-photo']}`}></div>
          <div className={`${s['overlay']}`}></div>
          {this.state.hideVideo
            ? ''
            : videoAutoplay}
          <div className={`${s['parade-cover-meta']}`}>
            <div className={`${s['meta-middle']}`}>
              <h1 className={`${s['parade-title']} ${s['meta']} ${s['parade-video-text']}`}>Parade to the Polls: Get Out the Vote Chicago</h1>
              <div className={`${s['play-video']}`}>
                <div onClick={this.onClickVideo} className={`${s['video-icon']} video-play`}>

                  <svg className={`${s['svg']}`} viewBox="280 648 36 36" version="1.1">
                    <defs></defs>
                    <path d="M280,666 C280,656.058875 288.056689,648 298,648 C307.941125,648 316,656.056689 316,666 C316,675.941125 307.943311,684 298,684 C288.058875,684 280,675.943311 280,666 Z M295,660 L295,672.390488 L304.574468,666.195244 L295,660 Z" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
                  </svg>
                  {/* <h6 className={` ${s['meta']} ${s['parade-video-subtitle']} ${s['parade-video-text']}`}>Play Video</h6> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${s['parade-video']}`}>
          <div className={`${s['video']} ${videoHide
            ? `${s['video-hidden']}`
            : null}`}>
            <div className={`${s['row-table']}`}>
              <div className={`col-sm-12 ${s['row-middle']}`}>
                <video preload='none' ref='parade' onClick={this.togglePauseVideo} className={`${s['video-active']}`} preload='none'>
                  <source src="https://dh136thgitkrt.cloudfront.net/p2p/parade.mp4" type="video/mp4"/>
                </video>
                <div onClick={this.togglePauseVideo} className={`${s['video--play']} ${ !pausedIcon
                  ? `${s['icon-hidden']}`
                  : null}`}>
                  <svg width="72px" height="72px" viewBox="280 648 36 36" version="1.1">
                    <defs></defs>
                    <path d="M280,666 C280,656.058875 288.056689,648 298,648 C307.941125,648 316,656.056689 316,666 C316,675.941125 307.943311,684 298,684 C288.058875,684 280,675.943311 280,666 Z M295,660 L295,672.390488 L304.574468,666.195244 L295,660 Z" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
                  </svg>
                </div>
                <div className={`${s['video--close']}`}>
                  <svg onClick={this.onCloseVideo} className={`{s.exit}`} width="22px" height="22px" viewBox="0 0 22 22" version="1.1">
                    <defs></defs>
                    <path d="M12.459,11.014 L20.698,2.82 C21.093,2.429 21.093,1.796 20.698,1.406 C20.304,1.015 19.664,1.015 19.27,1.406 L11.038,9.593 L2.73,1.284 C2.336,0.889 1.696,0.889 1.302,1.284 C0.908,1.68 0.908,2.321 1.302,2.716 L9.604,11.019 L1.272,19.305 C0.878,19.696 0.878,20.329 1.272,20.719 C1.666,21.11 2.306,21.11 2.7,20.719 L11.025,12.44 L19.3,20.716 C19.694,21.111 20.334,21.111 20.728,20.716 C21.122,20.32 21.122,19.679 20.728,19.284 L12.459,11.014 L12.459,11.014 Z" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className={`container`}>
              <div className={`${s['parade-title-text']}`}>
                <h3 className={`text-center ${s['text-title']}`}>“This Is What Democracy Looks Like”</h3>
                <h6 className={`text-center ${s['text-subtitle']}`}>
                  <i>-Chance the Rapper</i>
                </h6>
              </div>
              <div className={`row`}>
                <div className='col-md-4'>
                  <div className={`${s.intro}`}>
                    <img alt='Parade Infographic' className={`${s.media}`} src='https://dh136thgitkrt.cloudfront.net/parade-infographic.jpg' alt=''/>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className={`${s.intro}`}>
                    <p className={`${s.meta} empty-space-bottom ${s['subtitle']}`}>
                      <strong>Flex Your Vote: A Millennial Celebration of Democracy</strong>, an initiative created with Chicago’s Prime Fortune was designed to help millennial voters navigate the election space.
                      <br/><br/>Resting on activation, education, demonstration, and celebration, this initiative engaged diverse sectors of Chicago through voter registration shops, town hall events, and their Parade to the Polls, all highlighting the voice and strength of the city’s young people.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`container`}>
              <div className='row empty-space'>
                <div className={`col-xs-12 col-sm-12 col-md-12 ${s.subtitle} ${s.newsSubtitle} ${s.meta}`}>In the News</div>
              </div>
              <div className='row'>
                <div className={`col-sm-6 col-md-4 ${s['news-item']} empty-space-bottom`}>
                  <a target="_blank" className={`${s['news-link']}`} href='http://www.chicagoreader.com/Bleader/archives/2016/11/04/chance-the-rappers-new-nonprofit-hosts-a-parade-to-the-polls-on-monday'>
                    <div className={`${s['card-container']}`}>
                      <div style={{
                        height: '250px'
                      }} className={`${s['card-image-container']}`}>
                        <div className={`${s['card-image']}`} style={{
                          backgroundImage: 'url(https://suntimesmedia.files.wordpress.com/2016/11/chance-110816-003_65218917.jpg?w=670)'
                        }}></div>
                        {/* <div className={`${s['card-image-overlay']}`}></div>
                        <div className={`${s['card-image-text']}`}>The Inspiring Story Behind Chance the Rapper And Malcolm London’s Open Mike Nights</div> */}
                      </div>
                      <div className={`${s['card-text']}`}>
                        <div className={`${s['card-text-content']}`}>
                          <div className={`${s['card-meta']}`}>
                            <div className={`${s['card-icon']}`} style={{
                              backgroundImage: 'url(https://dh136thgitkrt.cloudfront.net/logo-chicago-reader.png)'
                            }}></div>
                            <div className={`${s['card-brand']}`}>The Chicago Reader</div>
                          </div>
                          <h3 className={`${s['card-text-title']}`}>
                            Chance the Rapper’s new nonprofit hosts a ‘Parade to the Polls’</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={`col-sm-6 col-md-4 ${s['news-item']} empty-space-bottom`}>
                  <a target="_blank" className={`${s['news-link']}`} href='http://democracy.works/blog/2016/11/11/wrap-up-parade-to-the-polls-with-chance-the-rapper'>
                    <div className={`${s['card-container']}`}>
                      <div style={{
                        height: '250px'
                      }} className={`${s['card-image-container']}`}>
                        <div className={`${s['card-image']}`} style={{
                          backgroundImage: 'url(https://dh136thgitkrt.cloudfront.net/parade_to_the_polls-43.jpg)'
                        }}></div>
                        {/* <div className={`${s['card-image-overlay']}`}></div>
                        <div className={`${s['card-image-text']}`}>The Inspiring Story Behind Chance the Rapper And Malcolm London’s Open Mike Nights</div> */}
                      </div>
                      <div className={`${s['card-text']}`}>
                        <div className={`${s['card-text-content']}`}>
                          <div className={`${s['card-meta']}`}>
                            <div className={`${s['card-icon']}`} style={{
                              backgroundImage: 'url(data:image/png;base64,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)'
                            }}></div>
                            <div className={`${s['card-brand']}`}>Democracy Works</div>
                          </div>
                          <h3 className={`${s['card-text-title']}`}>
                            Wrap-Up: Parade to the Polls with Chance the Rapper</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className={`col-sm-6 col-md-4 ${s['news-item']} empty-space-bottom`}>
                  <a target="_blank" className={`${s['news-link']}`} href='http://www.nbcchicago.com/news/local/Chance-the-Rapper-to-Host-Free-Get-Out-the-Vote-Concert-Monday-400276141.html'>
                    <div className={`${s['card-container']}`}>
                      <div style={{
                        height: '250px'
                      }} className={`${s['card-image-container']}`}>
                        <div className={`${s['card-image']}`} style={{
                          backgroundImage: 'url(https://dh136thgitkrt.cloudfront.net/chance-the-rapper-parade-to-the-polls.jpg)'
                        }}></div>
                        {/* <div className={`${s['card-image-overlay']}`}></div>
                        <div className={`${s['card-image-text']}`}>The Inspiring Story Behind Chance the Rapper And Malcolm London’s Open Mike Nights</div> */}
                      </div>
                      <div className={`${s['card-text']}`}>
                        <div className={`${s['card-text-content']}`}>
                          <div className={`${s['card-meta']}`}>
                            <div className={`${s['card-icon']}`} style={{
                              backgroundImage: 'url(https://dh136thgitkrt.cloudfront.net/logo-nbc.jpeg)'
                            }}></div>
                            <div className={`${s['card-brand']}`}>NBC Chicago</div>
                          </div>
                          <h3 className={`${s['card-text-title']}`}>
                            Chance the Rapper And Guests Hold Free Concert, 'Parade to the Polls' in Chicago</h3>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className={`container ${s['parade-quote-container']}`}>
              <div className={``}>
                <div className={`text-center ${s['parade-title-content']} ${s.meta}`}>
                  <div className={`${s['parade-quote-text']}`}>
                    <h5 className={` ${s['quote-title']}`}>“The turnout for…[the] march to the polls is not only inspiring to see, but it's beautiful proof of the power of the American youth when unified.”</h5>
                  </div>
                  <div className={`${s['media-icon']}`}>
                    <img alt='Popsugar' src='https://dh136thgitkrt.cloudfront.net/logo-popsugar.jpg' width="70" alt=''/>
                  </div>
                </div>
              </div>
            </div>

            <ParadeImageSlider/>
            <div className='empty-space-bottom'>
              <div className={`${s.intro}`}>
                <h3 className={`${s.meta} ${s['subtitle']} ${s['partner-title']} text-center`}>
                  This wouldn’t have been possible without our partners:
                </h3>
              </div>
              <BrandSlider/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Parade)
