import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Volunteer.css'
import Link from '../../Link'

class Volunteer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <div className={`${s.container}`}>
          <div className={s.bg}></div>
          <div className={s.overlay}></div>
          <div className={`container ${s['header-container']}`}>
            <div className={`row container-table ${s['header-row']}`}>
              <div className={`${s['header-content']}`}>

                <div className={`${s['meta-light']} ${s['header-text']} text-center`}>
                  <h3 className={`${s.title} ${s['volunteer-title']}`}>Volunteer and Contribute.</h3>
                  <span className={`${s.subtitle}`}>Learn how we can make a difference, together.</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        {/* Main Content */}
        <div className={`${s['container--responsive']} empty-space-bottom`}>
          <div className={`${s['content']} ${s.meta}`}>
            <div>
              <div className={`${s['content-meta']} `}>
                <h1 data className={`${s.title}`}>Register to Volunteer</h1>
              </div>
            </div>
            <div className={`${s['content-meta']} ${s['header-subtitle']}`}>
              <div data className={` ${s['header-description']}`}>SocialWorks continually holds initiatives in Chicago, ranging from political activism to celebrations of artistic achievement. Be the first to know about how you can work with us in the future through our volunteering initiatives!
              </div>
              <a className={`empty-space-bottom ${s['button']}`} target="blank" href='https://docs.google.com/forms/d/e/1FAIpQLSenXak2EkDPr7-31zhvClpDUpg_aYdLPqRgKhF84zVTSdsFeA/viewform'>Register Here
                <i className={`fa fa-angle-right ${s.fa}`}></i>
              </a>
            </div>
            <div className={`${s['about-image']}`}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Volunteer)
