import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Link from '../Link'
import s from './Header.css'
import {Navbar, Nav} from 'react-bootstrap/lib'
import main from './main'

class Header extends React.Component {
  state = {
    video: false
  }

  componentDidMount() {
    main(null, s, this.props.tabPanel)
  }

  render() {
    var absolute = this.props.navbarAbsolute
    var linkColor = this.props.linkColor || '';
    return (
      <div>
        <header className={`clearfix ${s.header}`}>
          <Navbar className={` navbar navbar-default ${s.navbar} ${s['navbar-default']} ${absolute ? `${s['navbar-absolute']}`: `${s['navbar-fixed']}`} `} fluid>
            <Navbar.Header className={`navbar-header ${s['navbar-header']}`}>
              <div className={`navbar-brand ${s['navbar-brand']}`}>
                <Link rel="canonical"  className={s.icon} to='/'>
                  <img className={`img-responsive ${s['img-responsive']} ${s['img-brand']}`} alt='SocialWorks Icon' src='/icon.png'/>
                </Link>
              </div>
              <Navbar.Toggle className={`navbar-toggle ${s['navbar-toggle']}`}>
                <span className={`${absolute ? `${s['icon-bar']}` : `${s['icon-bar']} ${s['icon-bar-dark']}`}`}/>
              </Navbar.Toggle>
            </Navbar.Header>
            <Navbar.Collapse className={`${s['navbar-collapse']}`} style={{
              height: '1px'
            }}>
              <ul className={`nav navbar-nav navbar-right ${s.nav} ${s['navbar-nav']}`}>
                {/* <li className={`nav-link ${s['nav-link-white']}`}>
                  <Link rel="canonical"  to='/'>Home</Link>
                </li> */}
                <li className={`nav-link ${s['nav-link-white']}`}>
                  <a target='_blank' href='https://socialworkschi.z2systems.com/np/clients/socialworkschi/survey.jsp?surveyId=15&'>Volunteer</a>
                </li>
                <li className={`nav-link ${s['nav-link-white']}`}>
                  <Link rel="canonical"  to='/about'>About Us</Link>
                </li>
                <li className={`nav-link ${s['nav-link-white']}`}>
                  <Link rel="canonical"  to='/events'>Events</Link>
                </li>
                <li className={`nav-link ${s['nav-link-white']}`}>
                  <Link rel="canonical"  to='/news'>In the News</Link>
                </li>
                <li className={`nav-link ${s['nav-link-white']}`}>
                  <a target="_blank" href='https://shop.socialworkschi.org/'>Shop SocialWorks</a>
                </li>
                <li className={`nav-link ${s['nav-link-white']}`}>
                  <Link rel="canonical"  to='/donate'>Donate</Link>
                </li>
                <li className={`${s['nav-mobile']}`}>
                  <a className={`${s['nav-mobile-link']}`} href='http://www.twitter.com/socialworks_chi' target='_blank'>
                    <i className={`${s['fa-mob']} fa fa-twitter`}/></a>
                  <a className={`${s['nav-mobile-link']}`} href='http://www.facebook.com/socialworkschi' target='_blank'>
                    <i className={`${s['fa-mob']} fa fa-facebook`}/></a>
                  <a className={`${s['nav-mobile-link']}`} href='http://www.instagram.com/socialworks_chi' target='_blank'>
                    <i className={`${s['fa-mob']} fa fa-instagram`}/></a>
                </li>
              </ul>
            </Navbar.Collapse>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default withStyles(s)(Header)
