import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './InitiativesParade.css'
import Link from '../../Link'

const Parade = (props) => {
  return (
    <div className={`init-paradepoll ${s.parade}`}>
      <div className={`${s['parade-photo']}`}></div>
      <div className={`${s['parade-overlay']}`}></div>
      <div className={`container ${s['parade-container']} ${s['text-center']}`}>
        <div className={`${s['parade-meta']}`}>
          <h1 className={`${s.meta} ${s.title}`}>Parade to the Polls</h1>
        </div>
        <div className='row'>
          <div className={`col-sm-6 col-md-6 ${s['parade-meta']}`}>
            <img className={`${s['parade-image image-border']}`} src='https://dh136thgitkrt.cloudfront.net/flex_vote.png' alt='Flex Vote'/>
          </div>
          <div className={`col-sm-6 col-md-6 ${s['parade-meta']}`}>
            <h2 className={`${s.meta} ${s.subtitle}`}>An initiative created with Chicago’s <strong><em>Prime Fortune</em></strong>, designed to help millennial voters navigate the election space.</h2>
            <Link rel="canonical"  className={`btn btn-success ${s.button}`} to='/paradetothepolls'>Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(Parade)
