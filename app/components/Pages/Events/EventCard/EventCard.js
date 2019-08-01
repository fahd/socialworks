import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Slider from 'react-slick'
import _ from 'lodash'
import Link from '../../../Link'

var SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props}>
      <span className={`${s.arrow} ${s.arrowRight}`}>
        <svg width="15px" viewBox="0 -1 253 479">
          <path d="M248.731,229.075 L23.631,3.975 C18.331,-1.325 9.831,-1.325 4.531,3.975 C-0.769,9.275 -0.769,17.775 4.531,23.075 L220.031,238.575 L4.531,454.075 C-0.769,459.375 -0.769,467.875 4.531,473.175 C7.131,475.775 10.631,477.175 14.031,477.175 C17.431,477.175 20.931,475.875 23.531,473.175 L248.631,248.075 C253.931,242.875 253.931,234.275 248.731,229.075 L248.731,229.075 Z"  stroke="none" fill="#BBBBBB" fillRule="evenodd"></path>
        </svg>
      </span>
    </div>
  }
});

var SamplePrevArrow = React.createClass({
  render: function() {
    return (
      <div {...this.props}>
        <span className={`${s.arrow} ${s.arrowLeft}`}>
          <svg width="15px" viewBox="0 -1 253 479">
            <path d="M248.731,229.075 L23.631,3.975 C18.331,-1.325 9.831,-1.325 4.531,3.975 C-0.769,9.275 -0.769,17.775 4.531,23.075 L220.031,238.575 L4.531,454.075 C-0.769,459.375 -0.769,467.875 4.531,473.175 C7.131,475.775 10.631,477.175 14.031,477.175 C17.431,477.175 20.931,475.875 23.531,473.175 L248.631,248.075 C253.931,242.875 253.931,234.275 248.731,229.075 L248.731,229.075 Z"  stroke="none" fill="#BBBBBB" fillRule="evenodd" transform="translate(126.587295, 238.587500) scale(-1, 1) translate(-126.587295, -238.587500) "></path>
          </svg>
        </span>
      </div>
    );
  }
});

class CustomArrows extends React.Component {

  constructor(props){
    super(props);
    this.renderCards = this.renderCards.bind(this)
  }

  renderCards(){
    var slidesToShow = this.props.slidesToShow
    var events = this.props;
    var signalComplete = this.props.signalComplete;

    const settings = {
      dots: false,
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      draggable: true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      infinite: false,
      accessibility: true,
      swipe: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow
          }
        }, {
          breakpoint: 1168,
          settings: {
            slidesToShow
          }
        }
      ]
    };

    var EventCards = (
        <Slider {...settings}>
        {
          _.map(events, event => {
            console.log('event',event)
          if (event.title) {
            return (
              <div key={event.createdAt} style={{
                margin: '0 5px'
              }}>
                <Link target="blank" className={`${s['news-link']}`} to={`/events/${event.url}`}>
                  <div className={`${s['card-container']}`}>
                    <div className={`${s['card-image']}`} style={{
                      backgroundImage: `url(${event.coverImage})`
                    }}>
                      <h3 className={`${s['card-text-title']}`}>{event.title}</h3>
                    </div>
                  </div>
                </Link>
                <div className={s.startDate}>{event.startDateFormatted.toUpperCase()}</div>
                <div className={`${s['card-text']}`}>
                  <div className={`${s['card-text-content']}`}>
                    <h4 className={`${s['card-text-subtitle']}`}>{event.subtitle}</h4>
                  </div>
                </div>
              </div>
            )
          } else return <div></div>
        })
      }
      </Slider>
    );
    return EventCards;
  }

  render() {
    var events = this.props;
    var signalComplete = this.props.signalComplete
    var title = this.props.title;
    var slidesToShow = this.props.slidesToShow


    return (
      <div className={`container ${s.container}`}>
        <div className={`col-sm-12 col-md-12 col-lg-12 ${s.eventTitle}`}>{title}</div>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            {this.renderCards()}
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(s)(CustomArrows)
