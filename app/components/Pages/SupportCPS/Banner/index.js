import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../../Link'
import Waypoint from 'react-waypoint'
import Scroll from 'react-scroll'
const Element = Scroll.Element

class Banner extends React.Component {

  render() {
    return (
      <div>
        <div className={`${s['banner-container']}`}>
          <div className={s.bg}></div>
          <div className={s.overlay}></div>
            <div className={`${s['container']}`}>
              {/* <Waypoint onEnter={this._handleWaypointEnter}/> */}
        </div>
      </div>
      </div>

    )
  }
}

export default withStyles(s)(Banner)
