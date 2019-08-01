import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './About.css'
import Link from '../../Link'
import Waypoint from 'react-waypoint'

class About extends React.Component {

  state = {
    fade: false,
    about: false,
    justin: false,
    aboutText: false,
    aboutLeader: false,
    aboutAcc: false,
    aboutFounders: false
  }

  constructor(props) {
    super(props)
    this.onFade = this.onFade.bind(this)
  }

  onFade(element) {
    switch (element) {
      case 'about':
        return this.setState({about: true})
        break;
      case 'aboutText':
        return this.setState({aboutText: true})
        break;
      case 'aboutLeader':
        return this.setState({aboutLeader: true})
        break;
      case 'aboutAcc':
        return this.setState({aboutAcc: true})
        break;
      case 'justin':
        return this.setState({justin: true})
        break;
      case 'aboutFounders':
        return this.setState({aboutFounders: true})
        break;
    }
  }

  render() {

    return (
      <div className={`${s['aboutContainer']}`}>
        <div className={`${s.container} ${s['banner-container']}`}>
          <div className={s.bg}></div>
          <div className={s.overlay}></div>

        </div>

        <div className={`${s['container']} ${s['mission-container']} empty-space-bottom`}>
          <div className={s.background}>
            <div className={`${s['content']}`}>
              <div className={`container-hide ${this.state.about
                ? 'fadeIn'
                : ''}`}>
                <Waypoint onEnter={() => this.onFade('about')}/>
                <div className={`${s['slogan']} `}>
                  <h1 data className={`${s.meta} ${s.title}`}>About SocialWorks: Chance the Rapper's Youth Empowerment Charity </h1>
                </div>
                <hr style={{
                  width: '50%',
                  margin: '0 auto'
                }}/> {/* <div className={`${s['about-image']}`}></div> */}
              </div>
              <div className={`${s['slogan']} ${s.meta} ${s['header-subtitle']} empty-space-top container-hide ${this.state.aboutText
                ? 'fadeIn'
                : ''}`}>
                <div data className={` ${s['header-description']}`}>SocialWorks aims to empower youth through the arts, education, and civic engagement while fostering leadership, accessibility, and positivity within the youth throughout Chicago.
                </div>
                <div data className={`${s['header-description']}`}>Our framework for interactive spaces and experiences aims to nurture local talent and open new doors, much like what its co-founder Chance The Rapper has done in the music industry.
                </div>
                <Waypoint onEnter={() => this.onFade('aboutText')}/>
                <div data className={`${s['header-description']}`}>
                  Leveraging a combination of grassroots marketing while staying true to his vision, Chance became the first streaming artist to be nominated for and win a Grammy. Together, SocialWorks and friends hope to move forward with the same spirit of innovation, bringing the city and its youth together.</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`container-fluid ${s['donate-container']} ${s.approach}`}>
          <div className={`row container-table`}>
            <div className={`${s['donate-content']} ${s['approach-text']}`}>
              <div className={`${s['donate-text']}`}>
                <h3 className={`text-center ${s['text-title']} ${s['approach-title']} ${s.meta}`}>The Approach</h3>
              </div>
              <div>
                <h6 className={`text-center ${s['text-subtitle']} ${s['inspire-subtitle']} ${s.meta}`}>
                  To inspire creativity, to build dreams, to let you be, you.</h6>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={`${s['acc-cover']} ${s['acc-cover-leader']} container-hide ${this.state.aboutAcc
            ? 'fadeIn'
            : ''}`}>
            <Waypoint onEnter={() => this.onFade('aboutAcc')}/>
            <div className={s['acc-leader']}></div>
          </div>
        </div>


        <div style={{
          'backgroundColor': '#fcfcfc'
        }}>
          <div className={`container ${s['leadership-container']} ${s['values-desktop-container']}`}>
            <div className={`row container-table`}>
              <div className={`${s['donate-content']}`}>
                <div className={` ${s.meta} ${s['header-subtitle']} ${s['leadership-text-container']}`}>

                  <h3 className={` ${s['text-title']} ${s['pos-title']}`}>Leadership</h3>
                  <h6 className={` ${s['text-subtitle']} ${s['pos-subtitle']}`} style={{
                    color: '#666'
                  }}>
                    SocialWorks builds every event with goals of providing youth a platform to be leaders. Through volunteering, dialogue, and performance, one moves with effectiveness while creating positive relationships within one’s community.</h6>
                  {/* <Link rel="canonical"  className={`${s.button}`} to='/initiatives'>
                    Check out our initiatives
                    <i className={`fa fa-angle-right ${s.fa}`}></i>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{backgroundColor: '#fcfcfc'}}>
        <div className={`${s['values-mobile-container']} container container-hide ${this.state.aboutLeader
          ? 'fadeIn'
          : ''}`}>
          <div className='row'>

            <div className={`${s['shop-content']} ${s['text-center-sm']}  ${s['pull-left']}`}>
              <h2 className={`${s['shop-title']} ${s['text--align']} ${s['meta']} `}>
                Leadership</h2>

              <div className={`${s['meta']} ${s['shop-subtitle']} ${s['text--align']} `}>SocialWorks builds every event with goals of providing youth a platform to be leaders. Through volunteering, dialogue, and performance, one moves with effectiveness while creating positive relationships within one’s community.
              </div>
              {/* <Link rel="canonical"  className={`${s.button}`} style={{float:'left'}} to='/initiatives'>
                Check out our initiatives
                <i className={`fa fa-angle-right ${s.fa}`}></i>
              </Link> */}

            </div>
            <Waypoint onEnter={() => this.onFade('aboutLeader')}/>


          </div>
        </div>
      </div>



        <div className={`${s['values-mobile-container']} container container-hide ${this.state.aboutLeader
          ? 'fadeIn'
          : ''}`}>
          <div className='row'>

            <div className={`${s['shop-content']} ${s['text-center-sm']} ${s['pull-left']}`}>
              <h2 className={`${s['shop-title']} ${s['text--align']} ${s['meta']} `}>
                Accessibility & Inclusiveness</h2>

              <div className={`${s['meta']} ${s['shop-subtitle']} ${s['text--align']} `}>Our programs are designed by creating spaces which are open to the public, welcome to all, and easily navigable. This allows for ideas and thought that can be more easily discussed.
              </div>

            </div>
            <Waypoint onEnter={() => this.onFade('aboutLeader')}/>

          </div>
        </div>
        <div className={`container ${s['donate-container']} ${s['acc-container']} ${s['values-desktop-container']}`}>
          <div className={`row container-table`}>
            <div className={`${s['donate-content']} ${s['acc-content']} ${s.meta}`}>

              <div className={`${s['donate-text']}`}>
                <h2 className={`text-center ${s['text-title']} ${s['acc-content-title']}`}>Accessibility & Inclusiveness</h2>
              </div>
              <div className={`${s.meta} ${s['shop-subtitle']} ${s['acc-content-subtitle']}`}>
                <div data className={`${s['header-description']} text-center`}>Our programs are designed by creating spaces which are open to the public, welcome to all, and easily navigable. This allows for ideas and thought that can be more easily discussed.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Waypoint onEnter={() => this.onFade('justin')}/>
          <div className={`${s['acc-cover']} container-hide ${this.state.justin
            ? 'fadeIn'
            : ''}`}>
            <div className={s['acc-bg']}></div>
          </div>
        </div>

        <div className={`${s['values-mobile-container']} container container-hide ${this.state.aboutLeader
          ? 'fadeIn'
          : ''}`}>
          <div className='row'>

            <div className={`${s['shop-content']} ${s['text-center-sm']} ${s['pull-left']}`}>
              <h2 className={`${s['shop-title']} ${s['text--align']} ${s['meta']} `}>
                Positivity</h2>

              <div className={`${s['meta']} ${s['shop-subtitle']} ${s['text--align']} `}>A SocialWorks event is a positive one. By leading with positivity, we hope our attendees mirror that same feeling. Only with this can we begin to trust, communicate, respect, and value one another’s wellbeing, community, and city.
              </div>

            </div>
            <Waypoint onEnter={() => this.onFade('aboutLeader')}/>

          </div>
        </div>
        <div className={`container ${s['donate-container']} ${s['acc-container']} ${s['values-desktop-container']}`}>
          <div className={`row container-table`}>
            <div className={`${s['donate-content']} ${s['acc-content']} ${s.meta}`}>

              <div className={`${s['donate-text']}`}>
                <h2 className={`text-center ${s['text-title']} ${s['acc-content-title']}`}>Positivity</h2>
              </div>
              <div className={`${s.meta} ${s['shop-subtitle']} ${s['acc-content-subtitle']}`}>
                <div data className={`${s['header-description']} text-center`}>A SocialWorks event is a positive one. By leading with positivity, we hope our attendees mirror that same feeling. Only with this can we begin to trust, communicate, respect, and value one another’s wellbeing, community, and city.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div>
          <div className={`${s['acc-cover']} ${s['acc-cover-founder']} container-hide ${this.state.aboutAcc
            ? 'fadeIn'
            : ''}`}>
            <Waypoint onEnter={() => this.onFade('aboutAcc')}/>
            <div className={s['acc-founder']}></div>
            <div className={`${s.meta} ${s['founder-label']}`} htmlFor="">From left to right: Essence Smith, Chancelor "Chance the Rapper" Bennett, Justin Cunningham</div>
          </div>
        </div>


        <div>
          <div className={`container empty-space ${s['founder-container']}`}>
            <div className={`row`}>
                <div className={` ${s.meta} ${s['header-subtitle']} ${s['founder-text-container']}`}>
                  <h3 className={` ${s['text-title']} ${s['founder-title']}`}>Essence Smith</h3>
                  <div className={`${s['founder-description']}`}>Essence Smith, 23, is the assistant to Chance Bennett, “Chance the Rapper”, as well as the Secretary here at SocialWorks.
                  </div>
                  <div className={`${s['founder-description']}`}>Essence graduated Cum Laude from the University of Illinois at Chicago in 2015 where she earned her Bachelor’s degree in Sociology and minor in Law and Society.</div>
                  <div className={`${s['founder-description']}`}>Throughout her life, Essence has made a conscious effort to give back to the community and to the youth in any way she can. </div>
                  <div className={`${s['founder-description']}`}>Through her role at SocialWorks, she has been able to continue this effort, whether it be through volunteering at OpenMike monthly or curating youth focused events in the City of Chicago, such as “Parade to the Polls”. </div>
                  <div className={`${s['founder-description']}`}>Though many describe she and her friends/coworkers as being incredibly impactful for being so “young”, she knows that there is more work to be done and has no plan on stopping anytime soon.</div>

                </div>
            </div>
            <hr className='empty-space' style={{width: '10%', margin:'0 auto'}}/>
            <div className={`row`}>
                <div className={` ${s.meta} ${s['header-subtitle']} ${s['founder-text-container']}`}>
                  <h3 className={` ${s['text-title']} ${s['founder-title']}`}>Chancelor “Chance the Rapper" Bennett</h3>
                  <div className={`${s['founder-description']}`}>Chancelor Bennett, “Chance the Rapper,” is not only a talented MC and energetic showman; he’s a humanitarian who is also extremely charitable.
                  </div>
                  <div className={`${s['founder-description']}`}>At just 23 years old, the Chatham native has made it a point to use his ever-growing popularity to give back to his hometown of Chicago, especially the youth who look up to him.  </div>
                  <div className={`${s['founder-description']}`}>Whether it's through hosting the monthly high school Open Mike series at the Harold Washington Library, raising over $100,000 to bring sleeping bag coats to Chicago's homeless last winter, going on field trips with Park District summer campers, or partnering with the NAACP to provide voter registration across the country during his “Magnificent Coloring World Tour”, Chance makes it a priority to help in any way can.</div>
                  <div className={`${s['founder-description']}`}>His commitment to the city is both remarkable and inspiring. Through his non-profit, SocialWorks, Chance will continue to use his platform to spark change and give back to the youth in not only the city of Chicago, but around the world.</div>

                </div>

            </div>
            <hr className='empty-space' style={{width: '10%', margin:'0 auto'}}/>
            <div className={`row`}>
                <div className={` ${s.meta} ${s['header-subtitle']} ${s['founder-text-container']}`}>
                  <h3 className={` ${s['text-title']} ${s['founder-title']}`}>Justin Cunningham</h3>
                  <div className={`${s['founder-description']}`}>Justin Cunningham, 23, is a creative-minded learner and entrepreneur, and most importantly a community member at heart.
                  </div>
                  <div className={`${s['founder-description']}`}>Justin graduated Magna Cum Laude from the State University of New York at Fredonia earning a Bachelors of Science in Finance and a minor in Leadership.</div>
                  <div className={`${s['founder-description']}`}>During college, Justin is most proud of his work within Enactus, leading a student organization to increase the quality of life financially, socially, and environmentally for students and residents of Western New York. </div>
                  <div className={`${s['founder-description']}`}>Justin hopes to have the pleasure of assisting businesses and individuals in expanding and protecting their assets and financial literacy.</div>
                  <div className={`${s['founder-description']}`}>As Operating Officer of SocialWorks, Justin wants to continue to blend the lines between arts, education and civic responsibility.</div>
                </div>
            </div>
          </div>
        </div> */}
      </div>
    )
  }
}

export default withStyles(s)(About)
