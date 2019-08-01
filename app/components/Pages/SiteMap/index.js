import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../Link'
import routes from './routes'

class SiteMap extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className={`${s['container--responsive']} empty-space-bottom`}>
          <div className={`${s['content']} ${s.meta}`}>
            <div>
              <div className={`${s['content-meta']} `}>
                <h1 data className={`${s.title}`}>Site Map</h1>
              </div>
            </div>
            <div className={s.sitemapLinks}>
              {routes.map(route => {
                if (!route.sub) {
                  return (
                    <div key={route.name}>
                      <a className={s.siteMapLink} href={`${route.link}`}>{route.name}</a>
                    </div>
                  )
                } else {
                  return (
                    <div key={route.name}>
                        <a className={s.siteMapLink} href={`${route.link}`}>{route.name}</a>
                        <div className={s.siteMapLinkSubContainer}>
                        {route.sub.map(route => {
                          return (
                              <div><a className={`${s.siteMapLink} ${s.siteMapLinkSub}`} href={`${route.link}`}>{route.name}</a></div>
                          )
                        })
                      }
                        </div>
                    </div>
                  )
                }
              })
}
            </div>
            {/* <div className={`${s['content-meta']} ${s['header-subtitle']}`}>
              <div data className={` ${s['header-description']}`}>SocialWorks continually holds initiatives in Chicago, ranging from political activism to celebrations of artistic achievement. Be the first to know about how you can work with us in the future through our volunteering initiatives!
              </div>
              <a className={`empty-space-bottom ${s['button']}`} target="blank" href='https://docs.google.com/forms/d/e/1FAIpQLSenXak2EkDPr7-31zhvClpDUpg_aYdLPqRgKhF84zVTSdsFeA/viewform'>Register Here
                <i className={`fa fa-angle-right ${s.fa}`}></i>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(SiteMap)
