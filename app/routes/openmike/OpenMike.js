import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './OpenMike.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import OpenMike from '../../components/Pages/OpenMike'

class OpenMikeContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={true}/>
        <OpenMike/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(OpenMikeContainer);
