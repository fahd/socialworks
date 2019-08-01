import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './HomeDonate.css'
import Slider from 'react-slick'
import SliderHeader from '../../Pages/Donate/Slider.js'

class HomeDonate extends React.Component {
  constructor(props) {
    super(props)
  }

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
      <div className={`${s['donate-container']}`}>
        <div className={s['donate-overlay']}></div>
        <div className={s['donate-bg']}></div>

        <div className={`${s['donate-container']}`}>
          <div className={`${s['donate-info']}`}>
            <div className={`${s['donate-content']}`}>
              <div className={`${s['donate-left']} col-sm-12 col-md-4`}>
                <div className={`${s['donate-left-text']}`}>
                  <h3 className={`${s['text-title']} ${s['donate-title']}`}>Support SocialWorks</h3>
                  <h6 className={`${s['text-subtitle']}`}>Make a difference by contributing to the next wave of Chicago youth.</h6>
                  <div className={`${s['button-container']} text-center`}>
                    <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                      <input type="hidden" name="cmd" value="_s-xclick"/>
                      <input type="hidden" name="hosted_button_id" value="L7K4WL38GLAAU"/>
                      <button formTarget="_blank" className={`${s['action-button']} ${s['button']}`} type="submit">Donate</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={` ${s['donate-right']} hide-sm col-sm-12 col-md-8`}>
                <ul className={`${s['donate-slider']} ${s['slider']}`}>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(HomeDonate)
