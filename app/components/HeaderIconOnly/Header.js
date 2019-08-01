import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Link from '../Link'
import s from './Header.css'
import {Navbar, Nav} from 'react-bootstrap/lib'

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className={`clearfix ${s.header}`}>
          <Navbar className={`navbar navbar-default ${s.navbar} ${s['navbar-default']} ${s['navbar-absolute']}`} fluid>
            <Navbar.Header className={`navbar-header ${s['navbar-header']}`}>
              <div className={`navbar-brand ${s['navbar-brand']}`}>
                <Link rel="canonical"  className={s.icon} to='/'>
                  <img className={`img-responsive ${s['img-responsive']} ${s['img-brand']}`} alt='SocialWorks Icon' src='/icon.png'/>
                </Link>
              </div>
            </Navbar.Header>
          </Navbar>
        </header>
      </div>
    )
  }
}

export default withStyles(s)(Header)
