import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Kok.css'
import HeaderIconOnly from '../../components/HeaderIconOnly'
import Footer from '../../components/Footer'
import Kok from '../../components/Pages/Kok'

class KOKContainer extends React.Component {

  render() {

    return (
      <div>
        <HeaderIconOnly/>
        <Kok/>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(s)(KOKContainer)
