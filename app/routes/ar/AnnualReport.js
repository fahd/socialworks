import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
// import s from './index.css'
import HeaderIconOnly from '../../components/HeaderIconOnly'
// import Footer from '../../components/Footer'
import AR from '../../components/Pages/AR'

class AnnualReport extends React.Component {

  render() {

    return (
      <div>
        <HeaderIconOnly/>
        <AR/>

      </div>
    )
  }
}

export default AnnualReport
