import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {connect} from 'react-redux'
import {browserHistory} from 'react-router'
import {firebaseAuth} from '../../../auth/firebase'
import {resetErrors, signIn} from '../../../actions/runtime'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../Link'
import Waypoint from 'react-waypoint'
import Loading from '../../Loading'

const validate = values => {
  const errors = {}
  if (!values.password) {
    errors.password = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: {
    touched,
    untouched,
    error,
    warning
  }
}) => (
  <div>
    <div>
      {touched && ((error && <div className={`${s.errorMessage}`}>{error}</div>))}
      <span className={s.inputContainer}>
        {label === 'Email'
          ? <svg className={`${s['fa']}`} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M21 4H3c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm0 1l.159.032L12 12.36 2.841 5.032 3 5h18zm1 12c0 .551-.449 1-1 1H3c-.551 0-1-.449-1-1V6c0-.11.03-.21.063-.309l9.625 7.7a.504.504 0 0 0 .624 0l9.625-7.7A.966.966 0 0 1 22 6v11z"></path>
            </svg>
          : <svg className={`${s['fa']}`} version="1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12 14c-.552 0-1 .449-1 1 0 .365.207.672.5.846V18.5a.5.5 0 0 0 1 0v-2.654A.987.987 0 0 0 13 15c0-.551-.448-1-1-1zm8.5-5H18V6c0-3.309-2.691-6-6-6S6 2.691 6 6v3H3.5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .5.5h17a.5.5 0 0 0 .5-.5v-14a.5.5 0 0 0-.5-.5zM7 6c0-2.757 2.243-5 5-5s5 2.243 5 5v3H7V6zm13 17H4V10h16v13z"></path>
          </svg>
}
        <input {...input} className={`${touched && error
          ? `${s.alert}`
          : ''}`} placeholder={label} type={type}/>
      </span>

    </div>
  </div>
)

class Admin extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  };
  state = {
    loading: true,
    submitLoading: false,
    album: '',
    trackNumber: '',
    showVideo: true
  }

  constructor(props, context) {
    super(props)
    this.selectSong = this.selectSong.bind(this);
  }

  componentDidMount() {
    this.selectSong();

    firebaseAuth().onAuthStateChanged(user => {
      if (user) {
        browserHistory.push('/admin/create');
        window.location.reload();

      } else {
        this.setState({loading: false})
      }
    })
  }

  selectSong() {
    var albumObj = {
      "college-dropout": 21,
      "late-registration": 21,
      graduation: 13,
      "acid-rap": 13,
      "coloring-book": 13,
      videoWaves: "https://www.youtube.com/embed/T0G2XbOwNZM?autoplay=1&showinfo=0&controls=0&modestbranding=1",
      videoBlessings: "https://www.youtube.com/embed/0j8frgmdvgc?autoplay=1&showinfo=0&controls=0&modestbranding=1&start=17",
      videoSundayCandy: "https://www.youtube.com/embed/OJaBo_aHjMA?autoplay=1&showinfo=0&controls=0&modestbranding=1&start=42",
      videoRunaway: "https://www.youtube.com/embed/K45mb9zjaxY?autoplay=1&showinfo=0&controls=0&modestbranding=1&start=22",
      videoFallsDown: "https://www.youtube.com/embed/8kyWDhB_QeI?autoplay=1&showinfo=0&controls=0&modestbranding=1",
      szn3: "https://s3.amazonaws.com/socialworksmedia/szn3-1.mp4",
    }

    var albumChoices = [
      null,
      'college-dropout',
      'late-registration',
      'graduation',
      'acid-rap',
      'coloring-book',
      'videoWaves',
      'videoBlessings',
      'videoSundayCandy',
      'videoRunaway',
      'videoFallsDown',
      'szn3'
    ];
    var choice = this.randomNumber(albumChoices.length - 1);
    var track = albumChoices[choice];
    if (typeof albumObj[track] === 'string') {
      this.setState({video: albumObj[track]})
    } else {
      this.setState({
        album: track,
        trackNumber: this.randomNumber(albumObj[track])
      })
    }
  }

  handleSubmit(e) {
    this.setState({submitLoading: true});
    this.props.signIn(e);
  }

  randomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

  errorMessage() {
    const {pristine, submitting} = this.props;
    if (this.props.errorMessage) {
      return (
        <div>
          <div className={`${s.errorMessage}`}>{this.props.errorMessage}</div>
          <button className={`btn ${s.btn}`} type="submit" disabled={submitting}>
            Login
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <button type="submit" className={`btn ${s.btn}`} disabled={submitting}>
            {this.state.submitLoading
              ? 'Loading'
              : 'Sign In'}
          </button>
        </div>
      )
    }
  }

  render() {

    const {video, album, loading, showVideo} = this.state;
    const {handleSubmit, pristine, reset, submitting} = this.props

    if (loading) {
      return <div><Loading/></div>
    }

      return (
        <div className={s.adminContainer}>
          <div className={`${s.container} scrollyBitch`} style={{
            background: `black`
          }}>
            <div className={`${s.formContainer}`}>
              <div className={`${s['form']} text-center`}>
                <form className={`${s['formBody']}`} onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                  <Field name="email" type="email" component={renderField} label="Email"/>
                  <Field name="password" type="password" component={renderField} label="Password"/> {this.errorMessage()}
                </form>
              </div>
            </div>
          </div>
        </div>
      )
}
}

const mapStateToProps = state => ({errorMessage: state.user.errorMessage})
const AdminContainer = reduxForm({form: 'Admin', validate})(Admin);
export default connect(mapStateToProps, {signIn})(withStyles(s)(AdminContainer))
