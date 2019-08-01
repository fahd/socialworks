import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Donate.css'
import Slider from 'react-slick'
import Link from '../../Link'
import SliderHeader from './Slider'
import Scroll from 'react-scroll'
const scroller = Scroll.scroller
const Element = Scroll.Element

class Donate extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className={s.name}>
        <SliderHeader/>
        <div className={`container ${s['container']}`}>
          <div className={`empty-space ${s['text-content']}`}>

            <div className={`${s['text-header']}`}>
              <h6>FROM THE FOUNDERS</h6>
              <h1 className={`${s['text-title']}`}>Donate: Empower the Youth</h1>

            </div>
            <div className='row empty-space-bottom'>
              <div className='col-sm-12 col-md-12'>

                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>Hey there!</div>
                </div>

                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>When we created SocialWorks our goal was simple, to empower the youth of Chicago and advocate for the fulfillment of individual achievement and success in all its forms.</div>
                </div>

                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>
                    Growing up in Chicago, we all had shared ambitions, from pursuing the arts to finding success in the classroom. But most importantly, in all of our shared journeys, we regularly had someone who listened to us when we expressed ourselves, always unapologetically and unfiltered.</div>
                </div>

                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>SocialWorks aims to continue this tradition and help the next wave of Chicago youth just as others helped us before.</div>
                </div>

                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>
                    By donating to our cause,
                    we can help continue to run initiatives like
                    <Link rel="canonical"  className={s.link} to='openmike'>
                      Open Mike,
                    </Link>
                    <Link rel="canonical"  className={s.link} to='warmestwinter'>
                      The Warmest Winter,</Link>
                    <Link rel="canonical"  className={s.link} to='paradetothepolls'>
                      Parade to the Polls,</Link> and our<Link rel="canonical"  className={s.link} to='supportcps/newchance'>New Chance: Arts & Literature Fund.</Link>
                  </div>
                </div>

                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>We're excited to continue to bring impactful initiatives to Chicago, and we hope that you tag along for the ride.</div>
                </div>


                <div className={`${s['text-body']} ${s['text-body-close']}`}>
                  <div className={`${s.text} ${s['text-signature']}`}>Sincerely,</div>
                </div>


                <div className={`${s['text-body']}`}>
                  <div className={`${s['avatar-photos']}`}>
                    <img alt='Justin Cunningham' className={`${s['avatar-image']}`} src='https://dh136thgitkrt.cloudfront.net/icons/justin-icon.jpg'/>
                    <img alt='Chance the Rapper' className={`${s['avatar-image']}`} src='https://dh136thgitkrt.cloudfront.net/icons/chance-icon.jpg'/>
                    <img alt='Essence Smith' className={`${s['avatar-image']}`} src='https://dh136thgitkrt.cloudfront.net/icons/essence-icon.jpg'/>
                  </div>
                  <div className={`${s.text} ${s['text-signature']} ${s['text-signature-close']}`}>- Justin, Chancelor, and Essence</div>
                </div>
                <div className={`${s['button-container']} text-center`}>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="L7K4WL38GLAAU"/>
                    <input formTarget="_blank" value="Donate to SocialWorks" className={`${s['action-button']} ${s['button']}`} type="submit"/>
                  </form>
                </div>
                <div className={`${s['button-container']} text-center`}>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="AHWBB9EBA6DL6"/>
                    <input formTarget="_blank" value="Donate to #supportCPS" className={`${s['action-button']} ${s['button']} ${s['cps-button']}`} type="submit"/>
                  </form>
                </div>

                <div className={` empty-space ${s.icon}`}></div>

              </div>
            </div>
          </div>
        </div>



      </div>
    )
  }
}

export default withStyles(s)(Donate)
