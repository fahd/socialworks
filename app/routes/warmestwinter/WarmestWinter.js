import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './WarmestWinter.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WarmestWinter from '../../components/Pages/WarmestWinter'

class WarmestWinterContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={true}/>
        <WarmestWinter/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(WarmestWinterContainer);
