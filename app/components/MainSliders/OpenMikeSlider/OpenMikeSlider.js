import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './OpenMikeSlider.css';
import Link from '../../Link'

class OpenMikeSlider extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.background}>
          <div className={s.content}>
            <div className={s.bg}></div>
            <div className={s.overlay}></div>
            <div className={`${s['content-meta']}`}>
              <div>
                <div><img className={`${s['image-logo']}`} src='https://dh136thgitkrt.cloudfront.net/openmike/open-mike-logo.png' alt='Open Mike Logo'/></div>
                <span data-txt="home.openmike-slider-subtitle" className={`${s.meta} ${s.subtitle}`}> Interested in participating?  Let your voice be heard.</span>
                <div className={`${s['btn-info']}`}>
                  <Link rel="canonical"  className={`btn btn-success ${s.button} ${s.meta}`} to='openmike'>Learn more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(OpenMikeSlider);
