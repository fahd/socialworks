import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Donate.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Donate from '../../components/Pages/Donate'
import OpenMike from '../../components/Pages/OpenMike'

class DonateContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={false}/>
        <Donate/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(DonateContainer);
