import React, {Component} from 'react';
import ReactHtmlParser from 'react-html-parser';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';
import _ from 'lodash'
import {shortenUrl, hash} from '../../../actions/runtime'
import {stateToHTML} from 'draft-js-export-html'
import {Modal, Button} from 'react-bootstrap/lib'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Toggle from 'react-toggle'
import moment from 'moment'
import GoogleMapReact from 'google-map-react'
const options = {
  scrollwheel: false
}
const K_WIDTH = 25;
const K_HEIGHT = 25;

const greatPlaceStyle = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,
  border: '4px solid #fff',
  borderRadius: K_HEIGHT,
  backgroundColor: '#ff6a6a',
  textAlign: 'center',
  whiteSpace: 'nowrap',
  color: '#333',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 1
};


const AnyReactComponent = ({text}) => <div style={greatPlaceStyle}>
  <strong >
    <span style={{
      marginLeft: '30px'
    }}>{text}</span>
  </strong>
</div>

class Event extends Component {

  static defaultProps = {
    zoom: 14
  }

  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.openModal = this.openModal.bind(this)
    this.generateTwitterLink = this.generateTwitterLink.bind(this)
    this.generateHTML = this.generateHTML.bind(this)
    this.generateTime = this.generateTime.bind(this)
    this.generateDisqusId = this.generateDisqusId.bind(this)
    // this.generateActionUrl = this.generateActionUrl.bind(this)
  }

  state = {
    showModal: false,
    shortenedUrl: '',
    url: `http://www.socialworkschi.org/events/${this.props.event.url}`,
    center: {
      lat: this.props.event.lat,
      lng: this.props.event.lng
    }
  }

  closeModal() {
    this.setState({showModal: false});
  }
  openModal() {
    this.setState({showModal: true});
  }

  // generateActionUrl(url){
  //   if (!/http:\/\/|https:\/\//.test(url)){
  //     return
  //   }
  // }
  generateTwitterLink(url, title, sUrl) {
    var capitalizedLink = title.split('-').map(i => `${i[0].toUpperCase()}${i.slice(1)}`).join('%20')
    return `https://twitter.com/home?status=${capitalizedLink}%20-%20${url}`
  }

  generateTime(startTime, endTime, startDate, endDate) {
    var beginDate = moment(startDate).date()
    var beginDay = moment(startDate).format('dddd')
    var beginMonth = moment(startDate).month()
    var beginMonthName = moment.months(beginMonth)
    var beginYear = moment(startDate).year()
    var endingDay = moment(endDate).format('dddd')
    var endingDate = moment(endDate).date()
    var endingMonth = moment(endDate).month()
    var endingMonthName = moment.months(endingMonth)
    var endingYear = moment(endDate).year()

    var date = beginMonth === endingMonth
    ? `${beginDay}, ${beginMonthName} ${beginDate}, ${beginYear}`
    : `${beginDay}, ${beginMonthName} ${beginDate}, ${beginYear} - ${endingDay}, ${endingMonthName} ${endingDate}, ${endingYear}`

    return (
      <div className={s.dateContainer}>
        <div>
          {date}
        </div>
        <div>
          {startTime.value || startTime}
          - {endTime.value || endTime}
        </div>
      </div>
    )
  }

  generateHTML(tag) {
    return (
      <div key={tag.key}>{tag}</div>
    )
  }

  generateDisqusId(title,url){
    return `${url}-${hash(title,url)}`
  }

  componentDidMount() {
    var _this = this;

    shortenUrl(`http://www.socialworkschi.org/events/${this.props.event.url}`).then(url => _this.setState({shortenedUrl: url.text}))
  }

  //
  render() {
    var e = this.props.event;
    var html = ReactHtmlParser(e.html, [{decodeEntities:true}]);
    var buttonText;

    if (e.registration){
      if (e.registrationType === 'purchase_ticket'){
        buttonText = 'Purchase Ticket';
      }
      else if (e.registrationType === 'livestream'){
        buttonText = 'Watch Livestream';
      }
      else if (e.registrationType === 'free_registration'){
        buttonText = 'Register'
      }
    }

    return (
      <div>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header className={s.modalHeaderContainer} closeButton>
            <div className={`${s.modalHeader} ${s.meta}`}>Share <strong> {e.title} </strong> with friends!</div>
          </Modal.Header>
          <Modal.Body>
            <input className={s.input} type="text" value={this.state.shortenedUrl} autoFocus/>
          </Modal.Body>
        </Modal>
        <Header navbarAbsolute={true}/>
        <div className={`${s.container}`}>
          <div style={{
            backgroundImage: `url(${e.coverImage})`
          }} className={s.bg}></div>
          <div className={s.overlay}></div>
          <div className={`container ${s.titleContainer}`}>
            <h1 className={`${s.title} ${s.meta}`}>{e.title}</h1>
            <h2 className={`${s.subtitle} ${s.meta}`}>{e.subtitle}</h2>
          </div>
        </div>

        <div className={`container ${s.mobileTitleContainer} hide-md hide-lg`}>
          <h1 className={`${s.meta} ${s.mobileTitle} text-center`}>{e.title}</h1>
          <h2 className={`${s.meta} ${s.mobileSubtitle} text-center`}>{e.subtitle}</h2>
        </div>

        <div className={`container ${s.shareContainer}`}>
          <div className={`row ${s.row}`}>

            <div className={`col-xs-12 col-sm-8 ${s.col}`}>
              <i onClick={this.openModal} className={`fa fa-share-square-o ${s.fa} ${s.faShare}`}></i>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.url}`} target="_blank">
                <i className={`fa fa-facebook-square ${s.fa} ${s.facebook}`}></i>
              </a>
              <a href={this.generateTwitterLink(this.state.shortenedUrl, e.title, e.url)} target="_blank">
                <i className={`fa fa-twitter ${s.fa} ${s.twitter}`}></i>
              </a>
            </div>
            <div className={`col-xs-12 col-sm-4 ${s.col}`}>
              {!e.registration ? '' : (
                <a target="_blank" href={e.registrationURL} className={`${s.button}`}>
                  {buttonText}
                </a>
              )}
            </div>
          </div>
        </div>

        <div className={`${s.eventDetailsContainer}`}>
          <div className={`container ${s.eventDetails}`}>
            <div className="row">
              <div className={`col-xs-12 col-sm-4 hide-md hide-lg`}>
                <div>
                  {/* Dates  */}
                  <div className={s.ebSection}>
                    <span className={`${s.eb} ${s.eventSideBarHeader}`}>Date and Time</span>
                    <div className={`${s.eb} ${s.eventSideBarDescription}`}>
                      {this.generateTime(e.startTime, e.endTime, e.startDateValue, e.endDateValue)}
                    </div>
                  </div>
                  {/* Location */}
                  <div className={s.ebSection}>
                    <div className={`${s.eb} ${s.eventSideBarHeader}`}>Location</div>
                    <div className={`${s.dateContainer} ${s.eventSideBarDescription}`}>
                        {e.address}{`${e.address2 ? ` - ${e.address2}` : ''}`}
                    </div>
                  </div>
                  {/* Contact */}
                  {e.email ? (<div>
                    <div className={s.ebSection}>
                      <span className={`${s.eb} ${s.eventSideBarHeader}`}>Contact</span>
                      <div className={`${s.eb} ${s.eventSideBarDescription}`}>
                        <a className={s.email} href={`mailto:${e.email}`}>{e.email}</a>
                      </div>
                    </div>
                  </div>) : ''}
                </div>
              </div>
              <div className={`col-xs-12 col-sm-8 ${s.eventDescription}`}>
                <div className={s.eventHTML}>
                  {_.map(html, tag => {
                    return this.generateHTML(tag);
                  })}
                </div>

              </div>
              <div className={`col-xs-12 col-sm-4 hide-sm ${s.hideSm}`}>
                <div>
                  {/* Dates  */}
                  <div className={s.ebSection}>
                    <span className={`${s.eb} ${s.eventSideBarHeader}`}>Date and Time</span>
                    <div className={`${s.eb} ${s.eventSideBarDescription}`}>
                      {this.generateTime(e.startTime, e.endTime, e.startDateValue, e.endDateValue)}
                    </div>
                  </div>
                  <div className={s.ebSection}>
                    <div className={`${s.eb} ${s.eventSideBarHeader}`}>Location</div>
                    <div className={`${s.dateContainer} ${s.eventSideBarDescription}`}>
                      <div>
                        {e.address}{`${e.address2 ? ` - ${e.address2}` : ''}`}
                      </div>
                    </div>
                  </div>
                  {/* Contact */}
                  {e.email ? (<div>
                    <div className={s.ebSection}>
                      <span className={`${s.eb} ${s.eventSideBarHeader}`}>Contact</span>
                      <div className={`${s.eb} ${s.eventSideBarDescription}`}>
                        <a className={s.email} href={`mailto:${e.email}`}>{e.email}</a>
                      </div>
                    </div>
                  </div>) : ''}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{
          height: '450px',
          width: '100%'
        }}>

          <GoogleMapReact
            defaultCenter={this.state.center}
            defaultZoom={this.props.zoom}
            options={options}
            text={e.title}
            bootstrapURLKeys={{key: `${process.env.GOOGLE_MAP || 'AIzaSyCp9IqHhi-eq2BQw8KsAXZDASa5Ap8cjKk'}`}}>
            <AnyReactComponent lat={e.lat} lng={e.lng}/>
          </GoogleMapReact>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(Event);
