import React, {Component} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import _ from 'lodash';
import s from './index.css'
import moment from 'moment';
import HorizontalTimeline from 'react-horizontal-timeline'
const values = ['2015-08-15', '2016-12-16', '2016-09-10', '2016-11-16', '2017-08-15']

class TimelineContainr extends Component {
  state = {
    value: 0,
    previous: 0
  };

  constructor(props) {
    super(props);
    _.bindAll(this, ['renderDateBody']);
  }

  renderDateBody() {
    return (
      <div className={s.timelineEvent}>
        <h2 className={s.timelineEventTitle}>Chance in the Bud Billiken Parade</h2>
        <div className={s.timelineEventContainer}>
          <img
            src='https://dh136thgitkrt.cloudfront.net/chance-bud.jpg'
            className={s.timelineEventImage}
            alt=""
          />
          <div className={s.timelineEventDescription}>
            Chance acted as Grand Marshal at the Bud Billiken Parade. We also partnered up with State Bags to donate hundreds of backpacks at the parade and pledged to donate an additional 30k bags throughout the year.
          </div>

        </div>
      </div>
    )
  }

  render() {
    return (
      <div className={s.timeline}>
        <div className={s.timelineBg}></div>
        <div className={s.timelineOverlay}></div>
        <div className={s.timelineContainer}>
          <h2 className={s.timelineTitle}>timeline</h2>
          <div className={s.timelineSlider}>
            <HorizontalTimeline index={this.state.value} indexClick={(index) => {
              this.setState({value: index, previous: this.state.value});
            }} values={values} getLabel={function(date) {
              return moment(date).format('MMM YYYY')
            }}/>
          </div>
          <div className='text-center'>
            {this.renderDateBody()}
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineContainr
