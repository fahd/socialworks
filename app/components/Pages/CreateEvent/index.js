import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import {firebaseAuth} from '../../../auth/firebase'
import {browserHistory} from 'react-router'
import Link from '../../Link'
import Waypoint from 'react-waypoint'
import Loading from '../../Loading'
import CreateEvent from './CreateEvent'

class EventContainer extends React.Component {
  state = {
    loading: true,
    submitLoading: false
  }
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        this.setState({loading: false})
      } else {
        browserHistory.push('/admin');
        window.location.reload();
      }
    })
  }

  render() {
    if (this.state.loading) {
      return <div><Loading/></div>
    }
    return (
      <div>
        <CreateEvent/>
      </div>
    )
  }
}

export default withStyles(s)(EventContainer)
