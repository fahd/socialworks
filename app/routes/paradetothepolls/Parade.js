import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Parade.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import ParadeToThePolls from '../../components/Pages/Parade'

class Parade extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={true}/>
        <ParadeToThePolls/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(Parade);
