import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import Link from '../Link'
import s from './Loading.css'

class Loading extends React.Component {
  render() {
    return (
      <div className={s.container}>
        <img className={s.img} src="/full-icon.png" alt="full icon"/>
      </div>

    )
  }
}

export default withStyles(s)(Loading)
