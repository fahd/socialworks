import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';
import Link from '../../../Link'

class EventHeaderContainer extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.background}>
          <div className={s.content}>
            <div className={s.bg}></div>
            <div className={`${s['content-meta']}`}>
              <div className={s.titleContainer}>
                <h1 className={`${s.meta} ${s.title}`}>SocialWorks Events</h1>
                <span className={`${s.meta} ${s.subtitle}`}> Join us as we participate, promote, and celebrate the diversity of our communities within Chicago.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(EventHeaderContainer);
