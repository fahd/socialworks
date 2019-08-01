import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './ParadeSlider.css'
import ParadePollSlider from '../../MainSliders/ParadePollSlider'
import Slider from 'react-slick'
import _ from 'lodash'

var SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props} style={{
      right: '50px'
    }} className={`${this.props.className} slick-button`}>
      <button className={`${s.button}`}>
        <span className={`${s.arrow} ${s.arrowRight}`}>
          <svg width="10px" viewBox="0 -1 253 479">
            <path d="M248.731,229.075 L23.631,3.975 C18.331,-1.325 9.831,-1.325 4.531,3.975 C-0.769,9.275 -0.769,17.775 4.531,23.075 L220.031,238.575 L4.531,454.075 C-0.769,459.375 -0.769,467.875 4.531,473.175 C7.131,475.775 10.631,477.175 14.031,477.175 C17.431,477.175 20.931,475.875 23.531,473.175 L248.631,248.075 C253.931,242.875 253.931,234.275 248.731,229.075 L248.731,229.075 Z"  stroke="none" fill="#FFFFFF" fillRule="evenodd"></path>
          </svg>
        </span>
      </button>
    </div>
  }
})

var SamplePrevArrow = React.createClass({
  render: function() {
    return <div {...this.props} style={{
      left: '10px'
    }} className={`${this.props.className} slick-button`}>
      <button className={`${s.button}`}>
        <span className={`${s.arrow} ${s.arrowLeft}`}>
          <svg width="10px" viewBox="0 -1 253 479">
            <path d="M248.731,229.075 L23.631,3.975 C18.331,-1.325 9.831,-1.325 4.531,3.975 C-0.769,9.275 -0.769,17.775 4.531,23.075 L220.031,238.575 L4.531,454.075 C-0.769,459.375 -0.769,467.875 4.531,473.175 C7.131,475.775 10.631,477.175 14.031,477.175 C17.431,477.175 20.931,475.875 23.531,473.175 L248.631,248.075 C253.931,242.875 253.931,234.275 248.731,229.075 L248.731,229.075 Z"  stroke="none" fill="#FFFFFF" fillRule="evenodd" transform="translate(126.587295, 238.587500) scale(-1, 1) translate(-126.587295, -238.587500) "></path>
          </svg>
        </span>
      </button>
    </div>
  }
});

class ParadeSlider extends React.Component {
  state = {
    count:0,
    images: [
      {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-1.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-2.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-3.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-4.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-5.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-6.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-7.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-8.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-9.jpg',
        backgroundPosition: 'center center'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-11.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-12.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-13.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-14.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-15.jpg'
      }, {
        url: 'https://dh136thgitkrt.cloudfront.net/p2p/parade-gallery-16.jpg'
      }
    ]
  }

  render() {
    let images = this.state.images

    const settings = {
      dots: false,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow/>,
      autoplay: true,
      autoplaySpeed: 1000,
      lazyLoad: false,
      pauseOnHover: false
    }
    return (
      <div>
        <Slider className={`home-slick`} {...settings}>
          {_.map(images, image => {
            return (
              <div key={this.state.count++} className={s.container}>
                <div className={s.background}>
                  <div className={s.content}>
                    <div style={{
                      background: `url(${image.url})`,
                      backgroundSize: `cover`,
                      backgroundPosition: `${image.backgroundPosition}`
                    }} className={s.bg}></div>
                  </div>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    )
  }
}

export default withStyles(s)(ParadeSlider)
