import React, {Component} from 'react';
import s from './index.css'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

const Intro = props => {
  return (
    <div className={s.intro}>
      <div className={s.introBg}></div>
      <div className={s.introContainer}>
        <div className={s.introDear}>Dear Chicago,</div>
        <div className={s.introContent}>
          i don't eat vegetables especially cauliflowers what's up with them
        </div>
        <div className={s.introSignature}>
          Your friend,
          <br/>
          <span className={s.introChance}>Chancelor Bennett</span>
          <span className={s.introTitle}>
            / Founder,SocialWorks</span>
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(Intro)
