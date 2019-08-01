import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Slider from 'react-slick'
import Link from '../../../Link'
import brands from './brands'
import _ from 'lodash'

var SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props} style={{right:'-30px'}}>
      <span className={`${s.arrow} ${s.arrowRight}`} >
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

export default class CustomArrows extends React.Component {

  render() {
    const settings = {
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      draggable: true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      infinite: false,
      accessibility: true,
      autoplay: true,
      autoplaySpeed: 2000,
      swipe: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3
          }
        }, {
          breakpoint: 1168,
          settings: {
            slidesToShow: 4
          }
        }
      ]
    };
    let posts = this.props
    return (
      <div className={`container ${s.container}`}>
        <div className='row'>
          <div className='col-sm-12 col-md-12 col-lg-12'>
            <Slider {...settings}>
              {_.map(brands, brand => {
                return (
                  <div key={brand.company} style={{
                    margin: '0 5px'
                  }}>
                    <a target="blank" className={`${s['news-link']}`}>
                      <div className={`${s['card-container']}`}>
                        <div style={{
                          backgroundImage: `url(${brand.imageURL})`,
                          height: '200px',
                          backgroundSize:'contain',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}></div>
                      </div>
                    </a>
                    {/* <div className={`${s['card-text']}`}>
                      <div className={`${s['card-text-content']}`}>
                        <h3 className={`${s['card-text-title']}`}>Hi</h3>
                        <div className={`${s['card-brand']}`}>Hi</div>
                      </div>
                    </div> */}
                  </div>
                )
              })}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}
