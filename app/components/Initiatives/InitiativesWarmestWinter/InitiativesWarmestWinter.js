import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './InitiativesWarmestWinter.css'
import Link from '../../Link'

const WarmestWinter = (props) => {
  return (
    <div className={`init-warmestwinter ${s.ww}`}>

      <div className={`container ${s['ww-container']} ${s['text-center']}`}>
        <div className={`${s['ww-meta']}`}>
          <h1 className={`${s.meta} ${s.title}`}>Warmest Winter</h1>
          <h3 className={`${s.meta} ${s.subtitle}`}>A seasonal initiative aiming to empower others through service.</h3>
        </div>
        <div className={`row ${s['space-u-1']}`}>
          <div className={`${s['amount-raised']}`}>
            <div className={`col-sm-offset-1 col-sm-4 col-md-offset-1 col-md-4 ${s.total} ${s['total-money']}`}>
                <img className={`${s['ww-image']}`} src='https://dh136thgitkrt.cloudfront.net/empowerment-plan-logo.png' alt='Empowerment Plan'/>
            </div>
            <div className={`col-sm-6 col-md-6 ${s.total} ${s['total-coats']}`}>
              <div className={`${s.subtitle} ${s['ww-subtitle']}`}> Learn about 2016's five-day campaign designed to raise funds for the highly mobile community in Chicago.</div>
              <Link rel="canonical"  className={`btn btn-success ${s.button}`} to='/warmestwinter'>Learn more</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(WarmestWinter)
