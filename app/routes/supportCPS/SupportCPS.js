import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SupportCPS from '../../components/Pages/SupportCPS'

class CPSContainer extends React.Component {
  render() {
    return (
      <div>
        <Header navbarAbsolute={true} tabPanel={true}/>
        <SupportCPS startIndex={this.props.startIndex} showCompanies={this.props.showCompanies}/>
        <Footer/>
      </div>
    )
  }
}

export default withStyles(s)(CPSContainer)
