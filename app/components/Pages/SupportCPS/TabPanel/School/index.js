import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../../../Link'
import Waypoint from 'react-waypoint'
import schools from '../../schools'
import _ from 'lodash'
import Dropdown from 'react-dropdown'
import CircularProgressbar from 'react-circular-progressbar'

class Container extends React.Component {
  state = {
    brandText: '',
    showButton: false,
    brandURL: '',
    warningMessage: false
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className={`${s.header}`}>
          <div className={`container ${s['header-container']} fade-in`}>

            <div className={`row empty-space-bottom ${s['header-title']}`}>
              <div className='col-sm-12 col-md-12'>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text} text-center`}>For every 100k donated, SocialWorks will donate 10K to a school of our choosing.
                    Your donations have helped provide children with the resources they deserve.</div>
                </div>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text} ${s.largeText} text-center`}>Schools Affected: <strong>22</strong></div>
                </div>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text} ${s.largeText} text-center`}>Money Donated: <strong>$220,000</strong></div>
                </div>
              </div>
            </div>


            {_.map(schools, school => {
              return (
                <div key={school.name} className={`col-sm-6 col-md-4 ${s['news-item']} empty-space-bottom`}>
                  <a target="_blank" className={`${s['news-link']}`} href={school.url}>
                    <div className={`${s['card-container']}`}>
                      {school.name}
                    </div>
                  </a>
                </div>
              )
            })}

          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Container)
