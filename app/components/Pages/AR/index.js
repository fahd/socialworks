import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../Link'
import Letter from './letter.js'
import Intro from './intro.js'
import Timeline from './timeline.js'
import Openmike from './openmike.js'

class AR extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div>
        <Letter/>
        <Intro/>
        <Timeline/>
        <Openmike/>
      </div>
    )
  }
}

export default withStyles(s)(AR)
