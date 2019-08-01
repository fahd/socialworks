import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Admin from '../../components/Pages/Admin'

class AdminContainer extends React.Component {
  render() {
    return (
      <div>
        <Admin/>
      </div>
    )
  }
}

export default withStyles(s)(AdminContainer)
