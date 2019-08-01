import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Volunteer.css';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Volunteer from '../../components/Pages/VolunteerGoogleForm'

class VolunteerContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={true}/>
        <Volunteer/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(VolunteerContainer);
