import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SupportCPS.css';
import Link from '../../Link'
import withViewport from '../../Viewport';

class SupportCPS extends React.Component {

  state = {
    videoHide: true,
    paused: false,
    pausedIcon: false,
    shouldLoadDesktopVideo: true
  }

  constructor(props) {
    super(props)
  }

  onClickVideo = () => {
    this.setState({videoHide: false})
    this.playVideo()
  }

  onCloseVideo = () => {
    this.refs.home.pause()
    this.setState({videoHide: true, pausedIcon: false})
  }

  playVideo = () => {
    this.refs.home.play()
  }

  handleImageLoaded = () => {}

  togglePauseVideo = () => {
    if (!this.state.paused) {
      this.setState({paused: true, pausedIcon: true})
      this.refs.home.pause()
    } else {
      this.setState({paused: false, pausedIcon: false})
      this.playVideo()
    }
  }

  renderBgVideo = (width, height) => {
    if (width <= 768) {
      return (
        <div className={s.bg}></div>
      )
    } else {
      return (
        <div>
          <video onLoad={this.handleImageLoaded} autoPlay preload loop className={s.videoBg}>
            <source src="https://dh136thgitkrt.cloudfront.net/chano.mp4" type="video/mp4"/>
          </video>
          <div className={s.overlay}></div>
        </div>
      )
    }
  }

  render() {
    let {shouldLoadDesktopVideo} = this.state;
    let {width, height} = this.props.viewport;
    let videoHide = this.state.videoHide
    const pausedIcon = this.state.pausedIcon
    return (
      <div className={s.parent}>
        <div className={`${s['video']} ${videoHide
          ? `${s['video-hidden']}`
          : null}`}>
          <div className={`${s['row-table']}`}>
            <div className={`col-sm-12 ${s['row-middle']}`}>
              <video preload='none' ref='home' onClick={this.togglePauseVideo} className={`${s['video-active']}`} controls preload='none'>
                <source src="https://dh136thgitkrt.cloudfront.net/SocialWorks+Summit.mp4" type="video/mp4"/>
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

        <div className={s.container}>
          <div className={s.background}>
            <div className={s.content}>
              {this.renderBgVideo(width, height)}
              <div className={`container-table ${s['content-meta']}`}>
                <div className={`${s['cps-content']}`}>
                  <h1 className={`${s.meta} ${s.title}`}>SocialWorks Summit</h1>
                  <span className={`${s.meta} ${s.subtitle}`}>
                    More than $2 million were donated to 20 schools across Chicago.
                  </span>
                  <div>
                    <svg onClick={this.onClickVideo} className={s.svg} viewBox="280 648 36 36" version="1.1">
                      <defs></defs>
                      <path d="M280,666 C280,656.058875 288.056689,648 298,648 C307.941125,648 316,656.056689 316,666 C316,675.941125 307.943311,684 298,684 C288.058875,684 280,675.943311 280,666 Z M295,660 L295,672.390488 L304.574468,666.195244 L295,660 Z" stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <div className={`${s['btn-info']}`}>
                      <Link rel="canonical" className={`btn ${s.button} ${s.meta}`} to='/supportcps'>About #supportCPS</Link>
                    </div>
                    <div className={`${s['btn-info']}`}>
                      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick"/>
                        <input type="hidden" name="hosted_button_id" value="AHWBB9EBA6DL6"/>
                        <input formTarget="_blank" value="Donate to #supportCPS" className={`${s.meta} btn ${s.button} ${s.donate}`} type="submit"/>
                      </form>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}

export default withViewport(withStyles(s)(SupportCPS));
