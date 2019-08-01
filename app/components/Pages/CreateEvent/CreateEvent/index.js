import React, {PropTypes} from 'react'
import {saveToFirebase, saveEventImage, createEventUrl} from '../../../../actions/runtime'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {firebaseAuth} from '../../../../auth/firebase'
import {browserHistory} from 'react-router'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {connect} from 'react-redux'
import {WithContext as ReactTags} from 'react-tag-input'
import {scrollToFirstError} from './scrollToFirstError'
import {EditorState, convertToRaw} from 'draft-js'
import {Editor} from 'react-draft-wysiwyg'
import {stateToHTML} from 'draft-js-export-html'
import Geosuggest from 'react-geosuggest'
import DatePicker from 'react-bootstrap-date-picker'
import Dropdown from 'react-dropdown'
import times from './times'
import Dropzone from 'react-dropzone'
import Toggle from 'react-toggle'
import Scroll from 'react-scroll'
import validate from './validate'
import eventTypes from './eventTypes'
import registrationTypes from './registrationTypes'
const Element = Scroll.Element
import s from './index.css'


import Link from '../../../Link'
import Waypoint from 'react-waypoint'

const renderEventTitle = ({
  input,
  label,
  name,
  fieldName,
  onSetTitle,
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
    <div>
      {fieldName && <Element name={`position-${fieldName}`}/>}
      <h2 className={`event-group-title ${s.meta}`}>{label}</h2>
      <input {...input} name={fieldName} placeholder={placeholder} type={type} onChange={(e) => {
        input.onChange(e);
        onSetTitle(e.target.value);
      }} className={`${s.input} ${s.meta} ${ !!(touched && error)
        ? `${s.error}`
        : ''}`}/> {touched && ((error && <span className={`${s.meta} ${s.errorMessage}`}>{error}</span>))}
    </div>
  )
}
const renderEventSubtitle = ({
  input,
  label,
  fieldName,
  onSetSubtitle,
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
    <div>
      {fieldName && <Element name={`position-${fieldName}`}/>}
      <h2 className={`event-group-title ${s.meta}`}>{label}</h2>
      <input {...input} name={fieldName} placeholder={placeholder} type={type} onChange={(e) => {
        input.onChange(e);
        onSetSubtitle(e.target.value);
      }} className={`${s.input} ${s.meta}`}/>
    </div>
  )
}
const renderEventDescription = ({
  input,
  label,
  fieldName,
  onSetDescription,
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
    <div>
      {fieldName && <Element name={`position-${fieldName}`}/>}
      <h2 className={`event-group-title ${s.meta}`}>{label}</h2>
      <input {...input} name={fieldName} placeholder={placeholder} type={type} onChange={(e) => {
        input.onChange(e);
        onSetDescription(e.target.value);
      }} className={`${s.input} ${s.meta} ${ !!(touched && error)
        ? `${s.error}`
        : ''}`}/> {touched && ((error && <span className={`${s.meta} ${s.errorMessage}`}>{error}</span>))}
    </div>
  )
}

const renderEventURL = ({
  input,
  label,
  fieldName,
  onSetUrl,
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
    <div>
      {fieldName && <Element name={`position-${fieldName}`}/>}
      <h2 className={`event-group-title ${s.meta}`}>{label}</h2>
      <input {...input} name={fieldName} placeholder={placeholder} type={type} onChange={(e) => {
        input.onChange(e);
        onSetUrl(e.target.value);
      }} className={`${s.input} ${s.meta} ${ !!(touched && error)
        ? `${s.error}`
        : ''}`}/> {touched && ((error && <span className={`${s.meta} ${s.errorMessage}`}>{error}</span>))}
    </div>
  )
}

const renderEventAddress2 = ({
  input,
  label,
  fieldName,
  onSetAddress2,
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
    <div>
      {fieldName && <Element name={`position-${fieldName}`}/>}
      <h2 className={`event-group-title ${s.meta}`}>{label}</h2>
      <input {...input} name={fieldName} placeholder={placeholder} type={type} onChange={(e) => {
        input.onChange(e);
        onSetAddress2(e.target.value);
      }} className={`${s.input} ${s.meta}`}/>
    </div>
  )
}

const renderLocationGroup = ({
  input,
  name,
  label,
  fieldValue,
  placeholder,
  type,
  meta: {
    touched,
    error,
    warning
  }
}) => {
  return (
    <div>
      <input {...input} value={fieldValue
        ? fieldValue
        : undefined} placeholder={placeholder} type={type}/>
    </div>
  )
}

const renderEmailField = ({
  input,
  type,
  label,
  fieldValue,
  placeholder,
  onSetEmail,
  meta: {
    touched,
    untouched,
    error,
    warning
  }
}) => (
  <div>
    {fieldValue && <Element name={`position-${fieldValue}`}/>}
    <div>

      <h2 className={`event-group-title ${s.meta}`}>{label}</h2>
      <input {...input} name={fieldValue} placeholder={placeholder} type={type} onChange={(e) => {
        input.onChange(e);
        onSetEmail(e.target.value);
      }} className={`${s.input} ${s.meta} ${ !!(touched && error)
        ? `${s.error}`
        : ''}`}/>
      {touched && ((error && <span className={`${s.meta} ${s.errorMessage}`}>{error}</span>))}
    </div>
  </div>
)

class CreateEvent extends React.Component {

  constructor(props) {
    super(props)
    // Title
    this.onSetTitle = this.onSetTitle.bind(this)
    this.onSetSubtitle = this.onSetSubtitle.bind(this)
    this.onSetUrl = this.onSetUrl.bind(this)
    this.onSetDescription = this.onSetDescription.bind(this)
    this.onSetAddress2 = this.onSetAddress2.bind(this)
    this.onSetEmail = this.onSetEmail.bind(this)
    // Locational actions

    this.onEnterAddress = this.onEnterAddress.bind(this)
    this.onClearAddress = this.onClearAddress.bind(this)
    this.onSetRegistration = this.onSetRegistration.bind(this)
    this.onSelectRegistrationType = this.onSelectRegistrationType.bind(this)
    // Date actions
    this.onEndDate = this.onEndDate.bind(this)
    this.onStartDate = this.onStartDate.bind(this)
    this.onStartTime = this.onStartTime.bind(this)
    this.onEndTime = this.onEndTime.bind(this)
    // Image actions
    this.onDrop = this.onDrop.bind(this)
    this.onDropVideo = this.onDropVideo.bind(this)
    this.showVideoError = this.showVideoError.bind(this)
    this.onClearImage = this.onClearImage.bind(this)
    this.onClearVideo = this.onClearVideo.bind(this)
    // WYSIWYG actions
    this.onEditorStateChange = this.onEditorStateChange.bind(this)
    // Event type
    this.onSelectEventType = this.onSelectEventType.bind(this)
    // Submit
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  state = {
    // booleans for showing/hiding content
    addTicket: false,
    location: true,
    locationSelected: false,
    locationBox: false,
    address: null,
    address2: '',
    email:'',
    imageSelected: false,
    videoSelected: false,
    showImageSelectError: false,
    showEventTypeError: false,
    showLocationError: false,
    ticketError: false,
    highlightBox: false,
    // state to be saved to firebase
    files: [],
    videoFiles: [],
    registrationUrl: '',
    description: '',
    submitting: false,
    startTime: times[38],
    endTime: times[42],
    startDateValue: new Date().toISOString(),
    endDateValue: new Date().toISOString(),
    partnershipTags: [],
    sponsorshipTags: [],
    isPrivate: false,
    registration: false,
    registrationType: null,
    showRemaining: false,
    title: '',
    subtitle: '',
    eventType: '',
    editorState: EditorState.createEmpty()
  }

  /************ Custom Methods *************/

  // Submit form
  handleSubmit(values) {
    var _this = this;
    let router = this.props.router
    // make sure user selects an image
    if (!this.state.address) {
      this.setState({showLocationError: true})
      return Scroll.scroller.scrollTo('position-dropzone', {smooth: true})
    }
    if (!this.state.eventType.value) {
      this.setState({showEventTypeError: true})
      return Scroll.scroller.scrollTo('position-eventType', {smooth: true})
    }
    if (!this.state.files.length) {
      this.setState({showImageSelectError: true})
      return Scroll.scroller.scrollTo('position-dropzone', {smooth: true})
    }

    // aggregate form data
    let eventInfo = {
      title: values.eventTitle || '',
      subtitle: values.eventSubtitle || '',
      url: values.eventUrl,
      address: this.state.address || '',
      address2: this.state.address2 || '',
      email: this.state.email || '',
      startTime: this.state.startTime,
      endTime: this.state.endTime,
      url: createEventUrl(values.eventTitle),
      registrationUrl: this.state.registrationUrl,
      registration: true,
      registrationType: this.state.registrationType,
      metaDescription: this.state.description,
      startDateValue: this.state.startDateValue,
      endDateValue: this.state.endDateValue,
      eventType: this.state.eventType.value || '',
      html: stateToHTML(this.state.editorState.getCurrentContent())
    }

    var isReadyToSubmit = confirm("Are you sure you've entered all the right information?");

    if (isReadyToSubmit) {
      this.setState({submitting: true});
      saveEventImage(this.state.files, eventInfo.title, eventInfo.url).then(e => {
        eventInfo.coverImage = e.body.Key;
        saveToFirebase(eventInfo).then(e => {
          _this.setState({submitting: false});
          browserHistory.push(`/events/${eventInfo.url}`);
          window.location.reload();
        })
      })
    }
  }

  onSetTitle(title) {
    this.setState({title})
  }
  onSetEmail(email) {
    this.setState({email})
  }

  onSetSubtitle(subtitle) {
    this.setState({subtitle})
  }

  onSetUrl(registrationUrl) {
    this.setState({registrationUrl})
  }
  onSetDescription(description) {
    this.setState({description})
  }

  onSetAddress2(address2) {
    this.setState({address2})
  }
  // Editor changes
  onEditorStateChange(editorState) {
    this.setState({editorState})
  }

  onDrop(files) {
    this.setState({files: files, imageSelected: true, showImageSelectError: false})
  }

  onDropVideo(files) {
    this.setState({videoFiles: files, videoSelected: true})
  }

  onSetRegistration(){
    this.setState({registration:!this.state.registration})
  }

  onSelectRegistrationType(event){
    const eventType = event.label.toLowerCase().replace(/ /g,'_');
    console.log('eventType',eventType);
    switch (event.value) {
      case 'purchase_ticket':
        this.setState({registrationType: eventType});
        break;
      case 'free_registration':
        this.setState({registrationType: eventType});
        break;
      case 'livestream':
        this.setState({'livestream': eventType});
        break;
    }
  }

  onImagePreview(files) {
    if (files.length > 0) {
      return (
        <div>
          {files.map((file) => <img src={`${file.preview}`} className='event-img-uploaded' alt='SocialWorks Image' key={file.size}/>)}
          <br/>
          <a onClick={this.onClearImage} className='event-enter-address'>
            <i className='fa fa-map-marker'/>
            Reset Image
          </a>
        </div>
      )
    } else {
      return false
    }
  }

  onVideoPreview(files) {
    if (files.length > 0) {
      if (files[0].type !== 'video/quicktime'){
        return;
      }
      return (
        <div>
          {files.map((file) => <img src={`${file.preview}`} alt='SocialWorks Uploaded Image' className='event-img-uploaded' key={file.size}/>)}
          <br/>
          <a onClick={this.onClearVideo} className='event-enter-address'>
            <i className='fa fa-map-marker'/>
            Reset Video
          </a>
        </div>
      )
    } else {
      return null
    }
  }

  onClearImage() {
    this.setState({files: [], imageSelected: false})
  }
  onClearVideo() {
    this.setState({videoFiles: [], videoSelected: false})
  }

  onSelectEventType(eventType) {
    this.setState({eventType, showEventTypeError: false})
  }

  // Dropdown times
  onStartTime(startTime) {
    this.setState({startTime})
  }
  onEndTime(endTime) {
    this.setState({endTime})
  }

  onStartDate(value, formattedValue) {
    this.setState({startDateValue: value, startFormattedValue: formattedValue})
  }

  onEndDate(value, formattedValue) {
    this.setState({endDateValue: value, endFormattedValue: formattedValue})
  }

  onClearAddress(e) {
    this.setState({location: true, locationSelected: false})
  }

  showVideoError(){
    if (this.state.videoFiles.length){
      window.video2 = this.state.videoFiles;
      let video = this.state.videoFiles;
      if (video[0].type !== 'video/quicktime'){
        return (
          <div className='text-center alert alert-danger'>This ain't no video</div>
        )
      }
    } else {
      return null
    }
  }



  onEnterAddress(e) {
    if (!e.label.length) {
      return this.setState({highlightBox: false, showLocationError: true})
    }
    this.setState({location: true, locationSelected: true, showLocationError: false, highlightBox: true, address: e})

  }

  componentDidUpdate() {
    // Access ISO String and formatted values from the DOM.
    const hiddenInputElement = document.getElementById("example-datepicker")
    // console.log(hiddenInputElement.value) // ISO String, ex: "2016-11-19T12:00:00.000Z"
    // console.log(hiddenInputElement.getAttribute('data-formattedvalue')) // Formatted String, ex: "11/19/2016"
  }

  render() {
    const {handleSubmit, pristine, submitting} = this.props

    let locationSelector
    let imageSelected
    let addTicket
    let locationBox = this.state.locationBox
    let locationSelected = this.state.locationSelected
    let files = this.state.files
    let videoFiles = this.state.videoFiles
    let partnershipTags = this.state.partnershipTags
    let sponsorshipTags = this.state.sponsorshipTags
    const tickets = this.props.tickets

    if (this.state.location) {
      locationSelector = (
        <div>
          <Geosuggest placeholder={'Specify a location'} country={'us'} onSuggestSelect={this.onEnterAddress}/>
        </div>
      )
    }

    if (this.state.locationBox) {
      locationBox = this.state.locationBox
    }

    if (!this.state.imageSelected) {
      imageSelected = (
        <div>
          <div className='event-drop-container'>
            <Element name={`position-dropzone`}/>
            <Dropzone className='event-dropzone' multiple={false} activeClassName='event-img-upload-active' onDrop={this.onDrop}>
              <div>
                <h2 className={`${s.eventImageUpload} ${s.meta}`}>Add Event Image</h2>
              </div>
            </Dropzone>
          </div>
          <div className={`${s.meta} text-center`}>We recommend using at least a 2160x1080px (2:1 ratio) image that's no larger than One(1) MB</div>
        </div>
      )
    }

    if (!this.state.addTicket) {
      addTicket = (
        <div>
          <a onClick={this.onCreateTicket} className='btn btn-ticket'><i className='fa fa-plus'/>
            Add a ticket</a>
        </div>
      )
    }

    return (
      <div className={s.container}>
        <div className={`modal modal-event ${s.modal}`}>
          <div className={`modal-dialog ${s.modalDialog}`}>
            <div className={`modal-content ${s.modalContent}`}>
              <div className={`modal-header`}>

                <h1 className={`modal-title text-center ${s.meta} ${s.modalTitle}`}>{this.state.title || 'Create an Event'}</h1>
                <h2 className={`text-center ${s.meta} ${s.modalSubtitle}`}>{this.state.subtitle || ''}</h2>
              </div>

              <div className={`modal-body`}>
                <div className="row">
                  <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <div className={`${s.eventBody} ${s.formTitle}`}>
                      <div className={``}>
                        <Field component={renderEventTitle} onSetTitle={this.onSetTitle} type='text' name='eventTitle' label='Name of Event' fieldName='eventTitle' placeholder='Enter an event name here...'/>
                      </div>
                    </div>
                    <div className={`${s.eventBody} ${s.formTitle}`}>
                      <div className={``}>
                        <Field component={renderEventSubtitle} onSetSubtitle={this.onSetSubtitle} type='text' name='eventSubtitle' fieldName='eventSubtitle' label='Event Subtitle (optional)' placeholder='Enter a subtitle here...'/>
                      </div>
                    </div>
                    <div className='event-location event-group'>
                      <Element name={`position-location`}/>
                      <h2 className={`${s.meta}`}>Location (start typing - you have to select some area from drop-down)</h2>
                      {locationSelector}
                      {this.state.highlightBox
                        ? <i className={`fa fa-check ${s.fa}`}></i>
                        : ''}
                      {this.state.showLocationError
                        ? <div className='text-center alert alert-danger'>You need to select a location</div>
                        : null}
                    </div>
                    <div className={`${s.eventBody} ${s.formTitle}`}>
                      <div className={``}>
                        <Field component={renderEventAddress2} onSetAddress2={this.onSetAddress2} type='text' name='eventAddress2' fieldName='eventAddress2' label='(Optional) - Additional comments on location ' placeholder='Enter details here...'/>
                      </div>
                    </div>
                    <div className={`${s.eventBody} ${s.formTitle}`}>
                      <div className={``}>
                        <Field component={renderEventURL} onSetUrl={this.onSetUrl} type='text' name='eventUrl' fieldName='eventUrl' label='(Optional) - Event URL ' placeholder="Enter a URL for event"/>
                      </div>
                    </div>
                    <div className={`${s.eventBody} ${s.formTitle}`}>
                      <div className={``}>
                        <Field component={renderEmailField} onSetEmail={this.onSetEmail} type='email' name='eventEmail' fieldValue='eventEmail' label='(Optional) - Contact Information' placeholder='Enter an email here...'/>
                      </div>
                    </div>

                    <div className=''>
                      <Element name={`position-eventType`}/>

                      <h2 className={`${s.meta}`}>
                        Event Type</h2>
                      <div className=''>
                        <Dropdown value={this.state.eventType} onChange={this.onSelectEventType} placeholder={'Select a topic'} className='event-datetime' options={eventTypes}/>
                      </div>
                      {this.state.showEventTypeError
                        ? <div className='text-center alert alert-danger'>You need to select an event type</div>
                        : null}
                      <div className="clearfix"></div>
                    </div>

                    <div className={s.eventToggle}>
                      <h2 className={`${s.meta}`}>Does this event require registration?</h2>
                      <Toggle
                        defaultChecked={this.state.registration}
                        onChange={this.onSetRegistration}/>
                    </div>
                    {this.state.registration ? (
                      <div className=''>
                        <Dropdown
                          value={this.state.eventType}
                          onChange={this.onSelectRegistrationType}
                          placeholder={'Select a registration type'}
                          className='event-datetime'
                          options={registrationTypes}/>
                      </div>
                    ) : null}

                    <div className=''>
                      <h2 className={`${s.meta}`}>Event Image</h2>
                      <div>
                        {imageSelected}
                        {this.onImagePreview(files)}
                        {this.state.showImageSelectError
                          ? <div className='text-center alert alert-danger'>You need to select an image</div>
                          : null}
                      </div>
                    </div>

                    {/* <div className=''>
                      <h2 className={`${s.meta}`}>Event Video (optional)</h2>
                      <div>
                        <div>
                          <div className='event-drop-container'>
                            <Element name={`position-video-dropzone`}/>
                            <Dropzone className='event-dropzone' multiple={false} activeClassName='event-img-upload-active' onDrop={this.onDropVideo}>
                              <div>
                                <h2 className={`${s.eventImageUpload} ${s.meta}`}>Add Event Video</h2>
                              </div>
                            </Dropzone>
                          </div>
                          <div className={`${s.meta} text-center`}>Make it Less than 20MB - Compress the Video Size!</div>
                        </div>
                        {this.onVideoPreview(videoFiles)}
                        {this.showVideoError()}
                      </div>
                    </div> */}

                    <div className='event-times event-group'>
                      <div className={`col-md-6 ${s.eventTime}`}>
                        <div className={`${s.start}`}>
                          <h2 className={`${s.meta}`}>
                            Starts
                          </h2>
                          <div className='event-time-input'>
                            <DatePicker className='event-datetime' id="start-date" value={this.state.startDateValue} onChange={this.onStartDate}/>
                            <div className='event-datetime'><Dropdown onChange={this.onStartTime} value={this.state.startTime} options={times}/></div>
                          </div>
                        </div>
                      </div>
                      <div className={`col-md-6 ${s.eventTime}`}>
                        <div className='endpicker'>
                          <h2 className={`${s.meta}`}>
                            Ends
                          </h2>
                          <div className='event-time-input'>
                            <DatePicker className='event-datetime' id="end-date" value={this.state.endDateValue} onChange={this.onEndDate}/>
                            <div className='event-datetime'><Dropdown onChange={this.onEndTime} value={this.state.endTime} options={times}/></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className={s.eventDescription}>
                      <h2 className={`${s.meta}`}>Event Description</h2>
                      <Editor toolbar={{
                        options: [
                          'textAlign',
                          'inline',
                          'blockType',
                          'fontSize',
                          'fontFamily',
                          'list',
                          'link',
                          'emoji',
                          'image',
                          'remove',
                          'history'
                        ]
                      }} toolbarClassName="event-toolbar" wrapperClassName="event-wrapper" editorClassName="event-editor" onEditorStateChange={this.onEditorStateChange} editorState={this.state.editorState} placeholder='Enter text below' spellCheck/>
                    </div>

                    <div className={`${s.eventBody} ${s.formTitle}`}>
                      <div className={``}>
                        <Field component={renderEventDescription} onSetDescription={this.onSetDescription} type='text' name='eventDescription' fieldName='eventDescription' label='Meta Description' placeholder='Enter Google meta description.'/>
                      </div>
                    </div>

                    <div className='text-center'>
                      <button className={`${s.btn}`}>{this.state.submitting
                          ? <span>Loading</span>
                          : <span>Create SocialWorks Event!</span>}</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const CreateEventContainer = reduxForm({
  form: 'CreateEvent', validate,
  // onSubmitFail: (errors) => scrollToFirstError(errors)
})(CreateEvent);

export default connect(null, null)(withStyles(s)(CreateEventContainer))
