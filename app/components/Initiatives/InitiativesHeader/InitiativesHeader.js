import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './InitiativesHeader.css'

const InitiativesHeader = (props) => {
  return (
    <div className={`init-header ${s.header}`}>
      <div className={`${s['header-photo']}`}></div>
      <div className={`${s['header-overlay']}`}></div>
      <div className={`container ${s['header-container']} ${s['text-center']} ${s['fade-in']}`}>
        <div className='row'>
          <div className={`col-sm-12 col-md-12 ${s['header-meta']}`}>
            {/* <div><img className={`${s['image-logo']}`} src='/full-icon.png' alt=''/></div>
            <h2 className={`${s.meta} ${s.subtitle}`}>Check out what we've been up to in the community.</h2> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(InitiativesHeader)
