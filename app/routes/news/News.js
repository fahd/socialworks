import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './News.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import News from '../../components/Pages/News'

class NewsContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={true}/>
        <News/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(NewsContainer);
