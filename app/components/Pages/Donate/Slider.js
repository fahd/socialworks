import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Donate.css'
import Slider from 'react-slick'
import SliderContainer from '../../Slider'

class HeaderSlider extends React.Component {

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000
    }
    return (
      <div>
        <Slider className={`${s.slick}`} {...settings}>
          <div><SliderContainer class='logoInspire'/></div>
          <div><SliderContainer class='logoDreams'/></div>
          <div><SliderContainer class='logoYou'/></div>

        </Slider>
      </div>
    )
  }
}
export default withStyles(s)(HeaderSlider)
