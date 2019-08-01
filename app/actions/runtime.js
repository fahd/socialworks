/* eslint-disable import/prefer-default-export */

import Firebase from 'firebase'
import {
  ref,
  config,
  firebaseAuth
} from '../auth/firebase'
import {
  SET_RUNTIME_VARIABLE,
  EMAIL_EXISTS_TRUE,
  EMAIL_EXISTS_FALSE,
  FIREBASE_POSTS,
  SIGN_IN,
  SIGNIN_ERROR
} from '../constants'
import superAgent from 'superagent'
import stringHash from 'string-hash'
import moment from 'moment'

export function setRuntimeVariable({
  name,
  value
}) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value
    }
  }
}

export function resetErrors({
  name,
  value
}) {
  return {
    type: SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value
    }
  }
}


export function getStartDate(startDate) {
  var beginDate = moment(startDate).date()
  var beginDay = moment(startDate).format('dddd')
  var beginMonth = moment(startDate).month()
  var beginMonthName = moment.months(beginMonth)

  return `${beginDay.slice(0,3)}, ${beginMonthName.slice(0,3)} ${beginDate}`
}

export function downloadFirebasePosts() {
  return ref.child('medium').once('value');
}

export function downloadFirebaseEvents() {
  return ref.child('eventTypes').once('value')
}

export function getInstagramPosts() {
  return superAgent.post('/api/instagram')
}

export function signIn(e) {
  return dispatch => {
    return firebaseAuth().signInWithEmailAndPassword(e.email, e.password)
      .catch(error => {
        dispatch({
          type: SIGNIN_ERROR,
          payload: error.code
        })
      })
  }
}

export function saveToFirebase(e) {
  var event = {
    address: e.address.label || '',
    address2: e.address2 || '',
    email: e.email || '',
    lat: e.address.location.lat || '',
    lng: e.address.location.lng || '',
    formattedAddress: e.address.gmaps.formatted_address,
    title: e.title,
    subtitle: e.subtitle,
    url: e.url,
    coverImage: `https://dh136thgitkrt.cloudfront.net/${e.coverImage}`,
    registrationURL: e.registrationUrl,
    html: e.html,
    metaDescription: e.metaDescription,
    startDateValue: e.startDateValue,
    startDateFormatted: getStartDate(e.startDateValue),
    endDateValue: e.endDateValue,
    startTime: e.startTime,
    endTime: e.endTime,
    eventType: e.eventType,
    createdAt: Date.now()
  };
  var eventType = createEventUrl(event.eventType);
  ref.child(`eventTypes/${eventType}/${event.url}`).set(event)
  return ref.child(`events/${event.url}`).set(event);
}

export function createEventUrl(title) {
  return title.replace(/[^0-9a-z\s]/gi, '').trim(" ").replace(/[\s]+/g, '-').toLowerCase();
}


export function hash (param, normalizer) {
  return stringHash(`${param}${normalizer}`).toString().slice(0, 8)
}


export function saveEventImage(files, title, url) {
  let file = files[0];
  var title = createEventUrl(title);
  var hashString = hash(title,url);
  const formData = new FormData();
  formData.append('file', file);
  formData.append('title',title);
  formData.append('hash', hashString);
  return superAgent.post('/api/uploadToS3')
  .send(formData)
}

export function shortenUrl(url){
  return superAgent.post('/api/shorten').send({url})
}
