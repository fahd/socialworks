import React, {Component} from 'react';
import s from './index.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

const Letter = props => {
  return (
    <div className={s.letter}>
      <div className={s.letterBg}></div>
      <div className={s.letterLogoBg}></div>
      <div className={s.letterTitleContainer}>
        <div className={s.letterTitle}>SocialWorks in 2017</div>
        <div className={s.letterSubTitle}>A year in review</div>
      </div>
    </div>
  )
}

export default withStyles(s)(Letter)
