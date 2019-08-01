import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Volunteer.css'
import {connect} from 'react-redux'
import {scrollToFirstError} from './scrollToFirstError'
import {Field, reduxForm} from 'redux-form'
import Link from '../../Link'
import Geosuggest from 'react-geosuggest'
import CheckBox from '../../CheckBox'
import {saveVolunteerInfo, checkVolunteerEmailExists} from '../../../actions/runtime'
import Scroll from 'react-scroll'
const scroller = Scroll.scroller
const Element = Scroll.Element
import {Modal, Button} from 'react-bootstrap/lib'

const items = ['Policy', 'Child & Family Wellness', 'Community Organizing', 'Conservation', 'Individual Rights and Liberties']

const validate = (values) => {
  const errors = {}

  if (!values.first) {
    errors.first = 'Required'
  }
  if (!values.last) {
    errors.last = 'Required'
  }
  if (!values.occupation) {
    errors.occupation = 'Required'
  }

  if (values.bio && values.bio.length > 140) {
    let lengthOver = values.bio.length - 140
    errors.bio = `You are ${lengthOver} characters over`
  }

  if (!values.bio) {
    errors.bio = `Message needed`
  }

  if (!values.age) {
    errors.age = 'Please enter a number'
  } else if (values.age && !(/^\d+$/).test(values.age)) {
    errors.age = 'Please enter a valid number'
  } else if ((/^\d+$/).test(values.age) && values.age && values.age.length > 3) {
    errors.age = 'C\'mon..you\'re not that old'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}

const renderEventTitle = ({
  input,
  label,
  name,
  placeholder,
  type,
  meta: {
    pristine,
    touched,
    error,
    warning
  }
}) => {
  return (
    <div className={`${s['input-container']}`}>
      {name && <Element name={`position-${name}`}/>}
      <label className={`${s['volunteer-subtitle']} ${s['input-label']}`}>{label}</label>
      <input {...input} name={name} placeholder={placeholder} type={type} className={`${ !!(touched && error)
        ? `${s['has-error']}`
        : ''}`}/> {touched && ((error && <div className={`${s['error-text']}`}>{error}</div>))}
    </div>
  )
}

const renderTextArea = ({
  input,
  label,
  name,
  type,
  meta: {
    touched,
    error,
    warning
  }
}) => {
  return (
    <div>
      {name && <Element name={`position-${name}`}/>}
      <label className={`${s['volunteer-subtitle']} ${s['input-label']}`}>{label}</label>
      <div className={s.textarea}>
        <textarea cols={10} {...input} type={type}/>
        <div className={s.charsLeft}>Characters left: {140 - input.value.length}</div>
        {touched && ((error && <div className='alert alert-danger'>{error}</div>))}
      </div>
    </div>
  )
}

class Volunteer extends React.Component {

  constructor(props) {
    super(props)

    this.onEnterAddress = this.onEnterAddress.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
  }

  state = {
    location: false,
    locationSelected: false,
    address: '',
    showLocationError: false,
    submitted: false,
    emailExists: false,
    showModal: false
  }

  closeModal() {
    this.setState({showModal: false});
  }

  openModal() {
    this.setState({showModal: true});
  }

  handleSubmit(values) {
    let data = {};
    let checkboxes = this.selectedCheckboxes
    if (!this.state.locationSelected || this.state.address === '') {
      this.setState({locationSelected: false, showLocationError: true})
      return Scroll.scroller.scrollTo('location', {smooth: true})
    }

    data.age = values.age
    data.first = values.first
    data.last = values.last
    data.email = values.email
    data.occupation = values.occupation
    data.bio = values.bio
    data.address = this.state.address
    data.interests = Array.from(checkboxes).join(", ")

    checkVolunteerEmailExists(data.email).then((email) => {
      if (email.exists) {
        this.setState({emailExists: true})
      } else {
        saveVolunteerInfo(data).then(data => {
          this.setState({submitted: true, emailExists: false})
          this.openModal()
        })
      }
    })

  }

  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  createCheckbox = label => (<CheckBox label={label} handleCheckboxChange={this.toggleCheckbox} key={label}/>)

  createCheckboxes = () => (items.map(this.createCheckbox))

  onEnterAddress(e) {
    this.setState({locationSelected: true, showLocationError: false})
    let address = e.label
    this.setState({address})
  }

  render() {
    const {handleSubmit, pristine, submitting} = this.props
    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>

            <div className={`${s.modal}`}>
              <div className={`${s['modal-inner']}`}>
                <div className={`${s['text-body']} ${s['volunteer-subtitle']}`}>
                  <img alt='full icon' src='/full-icon.png'/>
                  <div>Thanks for Registering!</div>

                </div>
              </div>

            </div>

          </Modal.Body>
        </Modal>
        <div>
          <div className={`${s.container} empty-space-bottom`}>
            <div className={s.bg}></div>
            <div className={s.overlay}></div>
            <div className={`container ${s['header-container']}`}>
              <div className={`row container-table`}>
                <div className={`${s['header-content']}`}>
                  <div className='container'>
                    <div className={`${s['header-text']} text-center`}>
                      <div className={`${s.meta}`}>
                        <h3 className={`${s.meta} ${s.title}`}>Volunteer and Contribute.</h3>
                        <span className={`${s.meta} ${s.subtitle}`}>Learn how we can make a difference, together.</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container empty-space-top ${s['container--responsive']}`}>
          <div className={`${s['text-content']}`}>
            <div className={`${s['text-header']}`}>
              <h2 className={`${s['text-title']}`}>Register to Volunteer</h2>
            </div>
            <div className='row empty-space-bottom'>
              <div className='col-sm-12 col-md-9'>
                <div className={`${s['text-body']} ${s['volunteer-subtitle']}`}>
                  <div >Fill out the information below and we'll get back to you with future volunteering opportunities.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`container empty-space ${s['container--responsive']}`}>
          <div className={`${s['text-content']}`}>
            <form className='volunteer-form' onSubmit={handleSubmit(this.handleSubmit)}>
              <div className='row'>
                <div className='col-sm-4 col-md-5 col-lg-4'>

                  <Field name='first' component={renderEventTitle} type='text' label='First Name' placeholder='e.g. Barack'/>
                </div>
                <div className='col-sm-5 col-md-5 col-lg-4'>

                  <Field name='last' component={renderEventTitle} type='text' label='Last Name' placeholder='e.g. Obama'/>
                </div>
                <div className='col-sm-5 col-md-2 col-lg-2'>

                  <Field name='age' component={renderEventTitle} type='text' label='Age' placeholder='Age'/>
                </div>
              </div>
              <div className='row '>

                <div className='col-sm-12 col-md-10 col-lg-7'>
                  <Field name='email' component={renderEventTitle} type='text' label='Email Address' placeholder='Enter your email here'/>
                </div>
                <div className='col-sm-12 col-md-7 col-lg-7'>

                  <Field name='occupation' component={renderEventTitle} type='text' label='Occupation' placeholder='e.g. Student, Writer, etc.'/>
                </div>
              </div>
              <div className='row '>
                <div className='col-sm-12 col-md-6 col-lg-8'>
                  <div className={`${s['input-container']}`}>
                    <Element name="location"></Element>
                    <label className={`${s['volunteer-subtitle']} ${s['input-label']}`}>Location</label>
                    <Geosuggest className={`${this.state.showLocationError
                      ? `${s['location-error']}`
                      : ''}`} placeholder={'Specify a location'} country={'us'} onSuggestSelect={this.onEnterAddress}/> {this.state.showLocationError
                      ? (
                        <div className={`${s['error-text']}`}>Please select a location</div>
                      )
                      : ''}
                  </div>
                </div>
              </div>

              <div className='row '>
                <div className='col-sm-12 col-md-9'>
                  <label className={`${s['volunteer-subtitle']} ${s['input-label']}`}>Interests</label>
                  {this.createCheckboxes()}
                </div>
              </div>
              <div className='row '>
                <div className='col-sm-12 col-md-7'>

                  <Field name='bio' type='text' component={renderTextArea} label='What Do You Want to Change?'/>
                </div>
              </div>
              {this.state.emailExists
                ? (
                  <div className='alert alert-danger'>This email has already registered!</div>
                )
                : ''}
              <div className={`${s['button-container']}`}>
                <button disabled={submitting || this.state.submitted} className={`${s['action-button']} ${s['button']} ${this.state.submitted
                  ? `${s['btn-disable']}`
                  : ''}`}>{this.state.submitted
                    ? 'Thanks for registering!'
                    : 'Register'}</button>
              </div>
            </form>
          </div>
        </div>
        {/* <iframe className={`${s.iframe} clearfix clear`} src="https://docs.google.com/forms/d/e/1FAIpQLSenXak2EkDPr7-31zhvClpDUpg_aYdLPqRgKhF84zVTSdsFeA/viewform?embedded=true" width="760" height="500" frameBorder="0" marginHeight="0" marginWidth="0">Loading...</iframe> */}
      </div>
    )
  }
}

Volunteer = reduxForm({
  form: 'volunteer',
  validate,
  onSubmitFail: (errors) => scrollToFirstError(errors)
})(Volunteer);

export default connect(null, null)(withStyles(s)(Volunteer))
