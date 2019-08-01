import React, {Component} from 'react';
import s from './index.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

class OpenMike extends Component {
  state = {
    selected: 1,
    zIdx1: 40,
    zIdx2: 20,
    zIdx3: 10,
    zIdx4: 30
  }
  constructor(props) {
    super(props);

    this.startInterval = this.startInterval.bind(this);
    this.calculateZIdx = this.calculateZIdx.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(this.startInterval, 2000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  startInterval() {
    if (this.state.selected === 4) {
      this.setState({
        selected: 1
      }, () => {
        this.calculateZIdx()
      })
    } else {
      this.setState({
        selected: this.state.selected + 1
      }, () => {
        this.calculateZIdx()
      })
    }
  }

  calculateZIdx() {
    const {selected} = this.state;
    if (selected === 1) {
      this.setState({zIdx1: 40, zIdx2: 20, zIdx3: 10, zIdx4: 30})
    } else if (selected === 2) {
      this.setState({zIdx1: 30, zIdx2: 40, zIdx3: 10, zIdx4: 20})
    } else if (selected === 3) {
      this.setState({zIdx1: 20, zIdx2: 30, zIdx3: 40, zIdx4: 10})
    } else if (selected === 4) {
      this.setState({zIdx1: 10, zIdx2: 20, zIdx3: 30, zIdx4: 40})
    }

  }

  render() {
    return (
      <div className={s.openmike}>
        <div className={s.openMikeTitleContainer}>
          <div className={s.openMikeTitle}>Empowering Chicago's Youth</div>
          <div className={s.openMikeSubTitle}>Making a difference through the arts</div>
        </div>
        <div className={`${s.openMikeContentContainer} ${s.first}`}>
          <div className={`${s.openMikeImage}`}>
            <img className={this.state.selected === 1
              ? `${s.imageActive}
              fadeIn`
              : ''} style={{
              'zIndex': this.state.zIdx1
            }} src="https://dh136thgitkrt.cloudfront.net/ar-om1-min.png" alt=""/>
            <img className={this.state.selected === 2
              ? `${s.imageActive}
              fadeIn`
              : ''} style={{
              'zIndex': this.state.zIdx2
            }} src="https://dh136thgitkrt.cloudfront.net/ar-om2-min.png" alt=""/>
            <img className={this.state.selected === 3
              ? `${s.imageActive}
              fadeIn`
              : ''} style={{
              'zIndex': this.state.zIdx3
            }} src="https://dh136thgitkrt.cloudfront.net/ar-om3-min.png" alt=""/>
            <img className={this.state.selected === 4
              ? `${s.imageActive}
              fadeIn`
              : ''} style={{
              'zIndex': this.state.zIdx4
            }} src="https://dh136thgitkrt.cloudfront.net/ar-om4-min.png" alt=""/>
          </div>
          <div className={s.openMikeContent}>
            <div className={s.openMikeAbout}>
              <div className={s.openMikeAboutTitle}>Inspiring dreamers.</div>
              <div className={s.openMikeAboutBio}>SocialWorks' pillars for success rest upon a single foundation - providing an outlet for our youth to be themselves and explore, intuit, and achieve. We've partnered with Google, worked with local artists in providing mentorship, and hosted recurring events like our monthly OpenMike in a positive, nurturing, and non-prejudicial environment. Our audience is more than an audience or constituency - they're our extended family!</div>
            </div>
          </div>
        </div>
        <div className={`${s.openMikeContentContainer} ${s.second}`}>
          <div className={s.openMikeContent}>
            <div className={s.openMikeAbout}>
              <div className={s.openMikeAboutTitle}>Telling Stories.</div>
              <div className={s.openMikeAboutBio}>SocialWorks' pillars for success rest upon a single foundation - providing an outlet for our youth to be themselves and explore, intuit, and achieve. We've partnered with Google, worked with local artists in providing mentorship, and hosted recurring events like our monthly OpenMike in a positive, nurturing, and non-prejudicial environment. Our audience is more than an audience or constituency - they're our extended family!</div>
            </div>
          </div>
          <div className={`${s.openMikeImage}`}>
            <img src="https://dh136thgitkrt.cloudfront.net/ar-ts-2-min-min.jpg" alt=""/>
            {/* <img src="https://dh136thgitkrt.cloudfront.net/ar-ts-3-min-min.jpg" alt=""/>
            <img src="https://dh136thgitkrt.cloudfront.net/ar-ts-4-min-min.jpg" alt=""/> */}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(OpenMike)
