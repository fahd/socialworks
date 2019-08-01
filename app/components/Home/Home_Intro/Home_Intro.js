import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home_Intro.css'
import Link from '../../Link'
import Waypoint from 'react-waypoint'

class Home_Intro extends React.Component {

  state = {
    fade: false,
    videoHide: true,
    paused: false,
    pausedIcon: false
  }

  constructor(props) {
    super(props)
    this.onFade = this.onFade.bind(this)
    this.onClickVideo = this.onClickVideo.bind(this)
    this.onCloseVideo = this.onCloseVideo.bind(this)
    this.playVideo = this.playVideo.bind(this)
    this.togglePauseVideo = this.togglePauseVideo.bind(this)
  }

  onClickVideo() {
    this.setState({videoHide: false})
    this.playVideo()
  }

  onCloseVideo() {
    this.refs.home.pause()
    this.setState({videoHide: true, pausedIcon: false})
  }

  playVideo() {
    this.refs.home.play()
  }

  togglePauseVideo() {
    if (!this.state.paused) {
      this.setState({paused: true, pausedIcon: true})
      this.refs.home.pause()
    } else {
      this.setState({paused: false, pausedIcon: false})
      this.playVideo()
    }
  }

  onFade(element) {
    switch (element) {
      case 'fade':
        return this.setState({fade: true})
    }
  }

  render() {
    let videoHide = this.state.videoHide
    let pausedIcon = this.state.pausedIcon

    return (
      <div>
        <div className={`${s.root} empty-space-bottom`}>
          <div className={`${s.container}`}>
            <div className={`row ${s.row}`}>

              <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-12 empty-space ${s['main-video']}`}>
                <div className={`${s['content-meta']}`}>
                  <div>
                    <div className={`video-play`}>
                      <div onClick={this.onClickVideo} className={s.videoThumbnail}>
                        <div className={`${s['video-overlay']}`}></div>
                        <video className={s.videoThumb} autoPlay loop>
                          <source src="https://dh136thgitkrt.cloudfront.net/intro.mp4" type="video/mp4"/>
                        </video>
                        <div className={`${s['video-content']}`}>
                          <h1 className={`${s.meta} ${s.videoTitle}`}>our mission</h1>
                          <hr style={{width:'25%', margin: '0 auto'}}/>
                          <h2 className={`${s.meta} ${s.title}`}>To inspire creativity, to build dreams, to let you be, you.</h2>
                          {/* <p className={`${s.meta} ${s['subtitle']}`}>We empower youth through the arts, education, and civic engagement throughout Chicago.</p> */}
                        </div>
                        <svg className={s.svg} viewBox="280 648 36 36" version="1.1">
                          <defs></defs>
                          <path d="M280,666 C280,656.058875 288.056689,648 298,648 C307.941125,648 316,656.056689 316,666 C316,675.941125 307.943311,684 298,684 C288.058875,684 280,675.943311 280,666 Z M295,660 L295,672.390488 L304.574468,666.195244 L295,660 Z" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          {/* Begin Video  */}
          <div>
            <div className={`${s['video']} ${videoHide
              ? `${s['video-hidden']}`
              : null}`}>
              <div className={`${s['row-table']}`}>
                <div className={`col-sm-12 ${s['row-middle']}`}>
                  <video preload='none' ref='home' onClick={this.togglePauseVideo} className={`${s['video-active']}`} preload='none'>
                    <source src="https://dh136thgitkrt.cloudfront.net/coloringday.mp4" type="video/mp4"/>
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
                      <path d="M12.459,11.014 L20.698,2.82 C21.093,2.429 21.093,1.796 20.698,1.406 C20.304,1.015 19.664,1.015 19.27,1.406 L11.038,9.593 L2.73,1.284 C2.336,0.889 1.696,0.889 1.302,1.284 C0.908,1.68 0.908,2.321 1.302,2.716 L9.604,11.019 L1.272,19.305 C0.878,19.696 0.878,20.329 1.272,20.719 C1.666,21.11 2.306,21.11 2.7,20.719 L11.025,12.44 L19.3,20.716 C19.694,21.111 20.334,21.111 20.728,20.716 C21.122,20.32 21.122,19.679 20.728,19.284 L12.459,11.014 L12.459,11.014 Z"  stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Video  */}
          <hr style={{width:'50%',margin:'0 auto '}}/>
          <h1 className={`text-center ${s.meta} ${s.homeInitiativesTitle}`}>Check out our most recent initiatives:</h1>
        </div>
        <div className={`${s.container} empty-space-bottom`}>
          <div className={`row ${s.row}`}>
            <div className={`${s['content-meta']} ${s['content-meta-initiatives']}`}>
              <div className={`${s['hero-module-container']} col-xs-12 col-sm-6 col-md-4 col-lg-4 `}>
                <Link rel="canonical"  to='/kok' className={`${s.cardContainer}`}>
                  <div className={`${s.cardHeader} ${s['avatar-kok']}`}>
                    {/* <div className={`${s.labelContainer}`}>
                      <div className={`${s.label}`}>New</div>
                    </div> */}
                  </div>
                  <div className={`${s['cardBio']} ${s['meta']}`}>
                    <h1>Kids of the Kingdom</h1>
                    <p className={`${s['card--content-text']}`}>A partnership between SocialWorks and Landr for a summer school program for Chicago youth, held at the Covenant Faith Church of God.</p>
                  </div>
                </Link>
              </div>
              <div className={`${s['hero-module-container']} col-xs-12 col-sm-6 col-md-4 col-lg-4 `}>
                <Link rel="canonical"  to='/paradetothepolls' className={`${s.cardContainer}`}>
                  <div className={`${s.cardHeader} ${s['avatar-p2polls']}`}>
                  </div>
                  <div className={`${s['cardBio']} ${s['meta']}`}>
                    <h1>Parade to the Polls</h1>
                    <p className={`${s['card--content-text']}`}>An election day initiative to get out the vote.</p>
                  </div>
                </Link>
              </div>
              <div className={`${s['hero-module-container']} col-xs-12 col-sm-6 col-md-4 col-lg-4 `}>
                <Link rel="canonical"  to='/warmestwinter' className={`${s.cardContainer}`}>
                  <div className={`${s.cardHeader} ${s['avatar-warmestwinter']}`}>
                  </div>
                  <div className={`${s['cardBio']} ${s['meta']}`}>
                    <h1>Warmest Winter</h1>
                    <p className={`${s['card--content-text']}`}>Together, we raised over $100,000 for the homeless.</p>
                  </div>
                </Link>
              </div>
              <div className={`${s['hero-module-container']} col-xs-12 col-sm-6 col-md-4 col-lg-4 `}>
                <Link rel="canonical"  to='/openmike' className={`${s.cardContainer}`}>
                  <div className={`${s.cardHeader} ${s['avatar-openmike']}`}>
                  </div>
                  <div className={`${s['cardBio']} ${s['meta']}`}>
                    <h1>OpenMike</h1>
                    <p className={`${s['card--content-text']}`}>A celebration of artistic endeavor from Chicago youth.</p>
                  </div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Home_Intro)
