import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import CreateEvent from '../../../components/Pages/CreateEvent'

class CreateEventContainer extends React.Component {
  render() {
    return (
      <div>
        <CreateEvent/>
      </div>
    )
  }
}

export default withStyles(s)(CreateEventContainer)
