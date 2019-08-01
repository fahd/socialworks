import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import CardSlider from './EventCard'


class EventCardContainer extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    var events = this.props.events;
    if (!events){
      return <div>Loading</div>
    }

    return (
      <div>
        <CardSlider {...events}/>
      </div>
    )
  }
}

export default withStyles(s)(EventCardContainer)
