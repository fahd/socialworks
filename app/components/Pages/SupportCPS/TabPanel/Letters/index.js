import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../../../Link'
import Scroll from 'react-scroll'
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
      <div className={`${s.name} fade-in`}>
        <h2 className={`${s['text-title']} text-center`}>Reforming the CPS Education Budget</h2>
        <div className={`container ${s['container']} `}>
          <div className={`${s['text-content']}`}>

            <div className={`${s['text-header']}`}>
              {/* <div className={`${s['social-links']}`}>
                <a target="_blank" href="https://twitter.com/home?status=Help%20support%20Chicago%20Public%20Schools%20-%20a%20letter%20from%20Chance%20the%20Rapper%20bit.ly/2mMcbmw%20%23supportCPS%20">
                  <i className={`fa fa-twitter ${s['fa']}`}></i>
                </a>
                <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//www.socialworkschi.org/supportCPS">
                  <i className={`fa fa-facebook ${s['fa']}`}></i>
                </a>
              </div> */}
            </div>
            <div className='row empty-space-bottom'>
              <div className='col-sm-12 col-md-12'>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>Illinois' education system is one of the most <a target="_blank" className={`${s['last-link']}`} href="http://www.chicagotribune.com/ct-sta-kadner-sudies-st-0327-20150326-column.html">severely underfunded</a> in the nation.</div>
                </div>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>After years of being underfunded, the Chicago Public Schools system has been forced to cut teachers, supplies, and after school programs. Despite having already cut $260 million in costs internally, CPS was left a $215 million gap in their budget as of May 2016.</div>
                </div>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>To prevent further irreparable damage, the only solution is for the Governor to sign the bill allocating these necessary funds to CPS, and then working with the General Assembly to pass a budget and education funding reform.</div>
                </div>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>
                    As the people of Illinois wait for Governor Rauner, I will push towards the goal of $215 million and for every $100,000 we receive, SocialWorks will donate $10,000 to a school of our choosing.</div>
                </div>
                <div className={`${s['text-body']}`}>
                  <div className={`${s.text}`}>Charitable donations certainly help fill gaps to provide enrichment opportunities inside and outside of the classroom, but can't make up for less-than-adequate state funding of our schools. The state of Chicago Public Schools needs to be remedied, and it's the Governor's job to lead that effort.</div>
                </div>
                <div className={`${s['text-body']} text-center ${s['text-signature']}`}>
                  <span className={`${s.text} ${s['text-signature-name']}`}>CHANCELOR BENNETT</span>
                  <span className={`${s.text} ${s['text-signature-role']}`}>
                    / FOUNDER, SOCIALWORKS</span>
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
