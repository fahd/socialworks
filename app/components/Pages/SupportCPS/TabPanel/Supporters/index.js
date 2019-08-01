import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Slider from 'react-slick'
import Link from '../../../../Link'
import brands from '../../brands'
import _ from 'lodash'

class Supporters extends React.Component {
  render() {
    return (
      <div className={`container ${s.container} empty-space`}>
        <div className='row empty-space-bottom'>
          {_.map(brands, brand => {
            return (
              <div key={brand.company} className={`col-xs-6 col-sm-6 col-md-4 col-lg-3`}>
                <div className={`${s.partnerCardContainer}`}>
                  <div className={`${s.partnerCard}`} style={{
                    height: '200px',
                    backgroundImage: `url(${brand.imageURL})`
                  }}></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Supporters)
