import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Slider from 'react-slick'
import BannerSlider from './Slider'


class Home extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      draggable: false,
      swipeToSlide: false,
      accessibility: false,
      arrows: false,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000
    }
    return (
      <div>
        <div><BannerSlider image='https://dh136thgitkrt.cloudfront.net/cover_robeson.jpg'/></div>
        {/* <Slider className={`home-slick`} {...settings}>
          <div><BannerSlider image='https://dh136thgitkrt.cloudfront.net/cover_robeson.jpg'/></div>
          <div><BannerSlider image='https://dh136thgitkrt.cloudfront.net/cover-robeson2.jpg'/></div>
          <div><BannerSlider image='https://dh136thgitkrt.cloudfront.net/cover-robeson3.jpg'/></div>
        </Slider> */}
      </div>
    )
  }
}

export default withStyles(s)(Home)
