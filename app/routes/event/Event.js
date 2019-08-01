import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Event.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Events from '../../components/Pages/Events'

class EventContainer extends React.Component {
  render() {
    return (
      <div>
        <Header linkColor={'#FFF'} navbarAbsolute={true}/>
        <Events/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(EventContainer);
