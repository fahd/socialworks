import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SiteMap from '../../components/Pages/SiteMap'

class SiteMapContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={false}/>
        <SiteMap/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(SiteMapContainer);
