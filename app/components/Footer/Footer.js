import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Link from '../Link'
import s from './Footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div id='footer'>
        <div className={`${s.footer}`}>
          <footer className='container'>
            <div className={`row ${s['row-meta']}`}>
              <div className={`${s['footer-column-icon']} col-sm-2 col-md-2`}>
                <ul className={`${s.meta} ${s['links-list']} `}>
                  <li>
                    <img className={`${s['footer-icon']}`} src='/icon.png' alt='footer icon'/>
                  </li>
                </ul>
              </div>
              <div className={`${s['footer-column']} col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1`}>
                <div className={`${s.meta} ${s['label']} `}>SocialWorks</div>
                <ul className={`${s.meta} ${s['links-list']} `}>
                  <li>
                    <Link rel="canonical"  to='/about'>Our Mission</Link>
                  </li>
                  <li>
                    <a href="mailto:info@socialworkschi.com" className={s.messageUs}> Contact Us</a>
                  </li>
                  {/* <li>
                    <a className={s.messageUs} href='https://m.me/SocialWorksChi'><img className={s.messengerIcon} src="/messenger_icon.png" alt=""/> Contact Us</a>
                  </li> */}

                  <li>
                    <Link rel="canonical"  to='/events'>SocialWorks Events</Link>
                  </li>
                  <li>
                    <Link rel="canonical"  to='/news'>In the News</Link>
                  </li>

                  <li>
                    <a target="_blank" href='https://shop.socialworkschi.org'>Shop</a>
                  </li>
                </ul>
              </div>

              <div className={`${s['footer-column']} col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1`}>
                <div className={`${s.meta} ${s['label']} `}>Participate</div>
                <ul className={`${s.meta} ${s['links-list']} `}>
                  <li>
                    <a target='_blank' href='https://socialworkschi.z2systems.com/np/clients/socialworkschi/survey.jsp?surveyId=15&'>Volunteer and Contribute</a>
                  </li>
                  <li>
                    <Link rel="canonical"  to='/donate'>Donate</Link>
                  </li>
                </ul>
              </div>
              <div className={`${s['footer-column']} col-sm-2 col-sm-offset-1 col-md-2 col-md-offset-1`}>
                <div className={`${s.meta} ${s['label']} `}>Initiatives</div>
                <ul className={`${s.meta} ${s['links-list']} `}>
                  <li>
                    <Link rel="canonical"  to='/kok'>Kids of the Kingdom</Link>
                  </li>
                  <li>
                    <Link rel="canonical"  to='/supportcps'>Support Chicago Public Schools</Link>
                  </li>
                  <li>
                    <Link rel="canonical"  to='/openmike'>OpenMike</Link>
                  </li>
                  <li>
                    <Link rel="canonical"  to='/paradetothepolls'>Parade to the Polls</Link>
                  </li>
                  <li>
                    <Link rel="canonical"  to='/warmestwinter'>Warmest Winter</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${s['footer-separator']}`}>
              <hr className={`${s.footerLine}`}/>
              <div className={`${s['footer-social']}`}>
                <div>
                  <label className={`${s.meta} ${s['footer-label']}`}>© SocialWorks</label>
                  <div className={s.footerSocial}>
                    <li className={`${s.footerSocialLink}`}>
                      <Link to='/sitemap' target='_blank' className={`${s.siteMap}`}>Site Map</Link>
                    </li>
                    <li className={`${s.footerSocialLink}`}>
                      <a href='http://www.twitter.com/socialworks_chi' target='_blank'><i className={`fa ${s.fa} fa-twitter`}/></a>
                    </li>

                    <li className={`${s.footerSocialLink}`}>
                      <a href='http://www.facebook.com/socialworkschi'  target='_blank'><i className={`fa ${s.fa} fa-facebook`}/></a>
                    </li>

                    <li className={`${s.footerSocialLink}`}>
                      <a href='http://www.instagram.com/socialworks_chi' target='_blank'><i className={`fa ${s.fa} fa-instagram`}/></a>
                    </li>
                  </div>
                </div>
              </div>
          </div>
          </footer>
        </div>
        <div className={`${s['footer-banner']}`}>
          <img src='https://dh136thgitkrt.cloudfront.net/footer-image.png' className={`${s['footer-photo']}`} alt='SocialWorks Footer'></img>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Footer)
