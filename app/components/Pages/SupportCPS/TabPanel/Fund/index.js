import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../../../Link'
import Waypoint from 'react-waypoint'

class Container extends React.Component {
  state = {
    fadeLetter: false
  }
  constructor(props) {
    super(props)
    this.onFade = this.onFade.bind(this)
  }
  onFade(element) {
    switch (element) {
      case 'fadeLetter':
        return this.setState({fadeLetter: true})
    }
  }
  render() {
    return (
      <div className={s.name}>
            <div className={`${s['text-header']} empty-space`}>
              <h1 className={`${s['text-title']} text-center`}>New Chance: Arts & Literature Fund.</h1>
              <h5 className={`${s['text-subtitle']} text-center`}>A plan to support and invest in Chicago arts programs.</h5>

            </div>
            <div className={`${s['fund-cover']}`}>
            </div>

        <div className={`container ${s['container']} fade-in`}>
          <div className={`${s['text-content']}`}>
            <div className='row empty-space-bottom'>
              <div className='col-sm-12 col-md-12'>
              <div className={`${s['text-body-wrapper']} `}>
                <div className={`${s['text-body']} `}>
                  <div className={`${s.text}`}>
                    The <strong>New Chance Arts & Literature Fund</strong> will ensure more students have access to arts enrichment education.
                  </div>
                </div>

                <div className={`${s['text-body']} `}>
                  <div className={`${s.text}`}>The fund will bring arts programs and materials to schools that have experienced a decrease in 5-year graduation rates, addressing their budgets, textbooks, and music programs.
                  </div>
                </div>
                <div className={`${s['text-body']} `}>
                  <div className={`${s.text}`}>This will affect schools that are most in need and will take effect during the <strong> 2017-2018 school year.</strong> </div>
                </div>

                <div className={`${s['text-body']} ${s['text-quote']} `}>
                  <hr style={{width:'75%',margin: '0 auto'}}/>
                  <div className={`${s.text} text-center`}>"We are committed to giving the kids as much as we can."</div>
                  <div className={`${s.textQuoteSubtitle} text-center`}> <i>- Chance the Rapper</i></div>
                  <hr style={{width:'75%',margin: '0 auto'}}/>
                </div>
                </div>
                <div className={`${s['text-body']} empty-space`}>
                  <div className={`${s.text}`}>
                    <div className={`${s['text-body']} `}>
                      <div className={`${s.text} text-center`}>A collaboration between:</div>
                      <div className='text-center'>
                        <img alt='Corporate Logo'  style={{
                          maxWidth: '175px'
                        }} src="https://dh136thgitkrt.cloudfront.net/corporate-icons/logo-sw.png" alt=""/>
                        <img alt='Corporate Logo' style={{
                          maxWidth: '175px'
                        }} src="https://dh136thgitkrt.cloudfront.net/corporate-icons/logo-childrenfirst.png" alt=""/>
                        <img alt='Corporate Logo' style={{
                          maxWidth: '175px'
                        }} src="https://dh136thgitkrt.cloudfront.net/corporate-icons/logo-ing.png" alt=""/>
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`${s['button-container']} text-center`}>
                  <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="AHWBB9EBA6DL6"/>
                    <input formTarget="_blank" value="Donate to #supportCPS" className={`${s['action-button']} ${s['button']} ${s['cps-button']}`} type="submit"/>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Container)
