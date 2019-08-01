import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../Link'
import {downloadFirebaseEvents} from '../../../actions/runtime'
import EventHeader from './EventHeader'
import EventCard from './EventCard'

class EventContainer extends React.Component {
  state = {
    complete: false
  }

  constructor(props) {
    super(props);
    this.fetchPosts = this.fetchPosts.bind(this)
    this.signalComplete = this.signalComplete.bind(this)
  }

  fetchPosts() {
    var _this = this
    let posts = downloadFirebaseEvents()
    .then(snapshot => {
      var events = snapshot.val();
      for (var key in events){
        var eventsArr = this.sortEvents(events[key])
        this.setState({[key]:eventsArr});
      }
    })
  }

  signalComplete(){
    setTimeout(()=>{
      this.setState({complete:true})
    },1700)
  }

  sortEvents(eventsObj){
    return _.map(eventsObj, event => event).sort((a,b) => a.createdAt < b.createdAt)
  }

  componentDidMount() {
    this.fetchPosts();
  }

  render() {
    var Loader = (
      <div className="spinnerContainer">
        <div className={s.spinner}>
          <div className={s.bounce1}></div>
          <div className={s.bounce2}></div>
          <div className={s.bounce3}></div>
        </div>
      </div>
    )

    var EventCards = (
      <div className='fade-in eventCards'>
        <EventCard {...this.state['community']} title={'Community'} slidesToShow={4}/>
      </div>
    )

    return (
      <div>
        <EventHeader/>
        {this.signalComplete()}
        {!this.state.complete ? Loader : EventCards}
      </div>
    )
  }
}

export default withStyles(s)(EventContainer)
