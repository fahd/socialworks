import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WarmestWinterSlider.css';
import Link from '../../Link'

class WarmestWinterSlider extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.background}>
          <div className={s.content}>
            <div className={s.bg}></div>
            <div className={s.overlay}></div>
            <div className={`${s['content-meta']}`}>
              <div>
                <h1 data-txt="home.warmestwinter-slider-title" className={`${s.meta} ${s.title}`}>Warmest Winter</h1>
                <span className={`${s.meta} ${s.subtitle}`}> We raised over $100,000 to provide clothes for the homeless in Chicago</span>
                <div className={`${s['btn-info']}`}>
                  <Link rel="canonical"  className={`btn ${s.button} ${s.meta}`} to='/warmestwinter'>Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(WarmestWinterSlider);
