import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './About.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import About from '../../components/Pages/About'

class AboutContainer extends React.Component {

  render() {

    return (
      <div>

        <Header navbarAbsolute={true}/>
        <About/>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(s)(AboutContainer)
