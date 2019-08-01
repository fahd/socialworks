import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Initiatives.css'
import Header from '../../components/Header'
import Initiatives from '../../components/Pages/Initiatives'
import Footer from '../../components/Footer'

class InitiativesContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={true}/>
        <Initiatives/>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(s)(InitiativesContainer)
