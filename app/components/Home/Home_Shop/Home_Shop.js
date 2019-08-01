import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Home_Shop.css'
import Link from '../../Link'
import Waypoint from 'react-waypoint'

class Home_Shop extends React.Component {

  render() {
    return (
      <div>
        <div className={`${s['shop-container']} container-fluid`}>
          <div className='row'>

            <div className={`${s['col-table']} col-sm-12`}>
              <div className={`${s['col-shop']} ${s['col-shop-desk']}`}>
                <div className={`${s['shop-overlay']} hide-sm`}></div>
              </div>
              <div className={`${s['shop-content']} ${s['pull-left']}`}>
                <h1 className={`${s['shop-title']} ${s['meta']} `}>Love SocialWorks?</h1>

                <div className={`${s['meta']} ${s['shop-subtitle']} ${s['empty-space']} `}>Check out our store for SocialWorks merchandise.
                </div>
                <a target="_blank" className={`${s['button']}`} href='https://shop.socialworkschi.org'>
                  Shop SocialWorks
                  <i className={`fa fa-angle-right ${s.fa}`}></i>
                </a>
              </div>
            </div>
            <div className={`col-sm-12 hide-md hide-lg ${s['col-shop-full']} `}>
              <div className={`${s['col-shop']} ${s['col-shop-top']}`}></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Home_Shop)
