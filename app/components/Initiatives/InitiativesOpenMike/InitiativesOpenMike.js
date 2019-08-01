import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './InitiativesOpenMike.css'
import Link from '../../Link'

const OpenMike = (props) => {
  return (
    <div className={`init-openmike pad-vertical ${s['open-mike']}`}>
      <div className='container'>
        <div className={s.container}>
          <div className={s.intro}>
            <h1 className={`${s.meta} ${s.title}`}>Open Mike</h1>
            <h3 className={`${s.meta} ${s.subtitle}`}>A monthly expression of personal creativity and artistic endeavor from Chicago youth.
            </h3>
          </div>
          <div className={`about-openmike`}>
            <div className={`row ${s['content-slide']}`}>
              <div className='col-sm-12 col-md-6'>
                <img src='https://dh136thgitkrt.cloudfront.net/openmike/open_mike_2.jpg' className={`${s['initiative-image']} ${s['image-pull-left']}`} alt='open mike 2'/>
              </div>
              <div className={`col-sm-12 col-md-6 ${s['text-content']}`}>
                <div className={`${s['content-meta']} ${s['meta']}`}>
                  <h2 className={`${s['content-title']}`}>Celebrate Creativity</h2>
                  <span className={`${s['content-subtitle']}`}>
                    OpenMike aims to teach showmanship, connect young artists, and inspire creativity within the next wave of Chicago youth.<br/><br/>
                  </span>
                </div>
              </div>
            </div>

            <div className={`row ${s['content-slide']}`}>
              <div className={`col-sm-12 col-md-6 ${s['top-chano']}`}>
                <img src='https://dh136thgitkrt.cloudfront.net/openmike/open_mike_1.jpg' className={`${s['initiative-image']} ${s['image-pull-right']}`} alt='open mike 1'/>
              </div>
              <div className={`col-sm-12 col-md-6 ${s['text-content']}`}>
                <div className={`${s['content-meta']} ${s['meta']}`}>
                  <h2 className={`${s['content-title']}`}>Engaging the community</h2>
                  <span className={`${s['content-subtitle']}`}>
                    Every month we partner with the Chicago Public Library to present a safe space for high schools students to share, express, and network with like minded individuals.
                    <br/>
                    <br/>
                    This event, housed in the Pritzker Auditorium, showcases randomly selected students to present a 3-minute piece of their choice.</span>
                </div>
              </div>
              <div className={`col-sm-12 col-md-6 ${s['bottom-chano']}`}>
                <img src='https://dh136thgitkrt.cloudfront.net/openmike/open_mike_1.jpg' className={`${s['initiative-image']} ${s['image-pull-right']}`} alt='initiative'/>
              </div>
            </div>
          </div>
          <div className={`${s.quote}`}>
            <span className={`${s.meta} ${s['content-quote']}`}>
              “Indeed, there is no better way to celebrate Brother Mike’s passing than with an Open Mike; this is his legacy. Spaces like YOUmedia were initially created in the spirit of growth, and the Open Mike only further pushes that philosophy.
              <br/><br/>
              The event openly accepts the kids’ hopes, dreams, fears and realities, allowing them to be unapologetically themselves.”</span>
          </div>
          <div className={`${s['quote-author']} ${s['space-u-1']}`}>
            <div className={`${s['media-icon']}`}>
              <img src='https://dh136thgitkrt.cloudfront.net/openmike/booth-icon.jpeg' width="70" alt='DJ booth'/>
            </div>
          </div>
          <div className={`${s['your-voice']}`}>
            <h3 className={`${s.meta} ${s['motto']} `}>This is your stage, your crowd, your community.</h3>
            <Link rel="canonical"  className={`${s.button} ${s['button-orange']}`} to='/openmike'>Learn more</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withStyles(s)(OpenMike)
