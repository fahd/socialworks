import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Initiatives.css'
import Link from '../../Link'
import OpenMike from '../../Initiatives/InitiativesOpenMike'

const Initiatives = (props) => {
  return (
    <div>
      <div className={`${s['banner-container']}`}>
        <div className={s.bg}></div>
        <div className={s.overlay}></div>
        <div className={`container-table`}>
          <div className={`${s['header-content']}`}>
            <div className={`${s['header-text']} text-center`}>
              <div className={``}>
                <h3 className={`${s['banner-text']} ${s['banner-title']} ${s.light}`}>Check out our work in the community.</h3>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={`${s['media-container']}`}>
        <div className={`${s['about-image']}`}
          style={{
            backgroundImage: 'url(https://buzzworthy.s3.amazonaws.com/wp-content/uploads/2016/12/tumblr_n2x6fkdblr1rsaukxo1_1280.jpg)',
            backgroundPosition: 'center'
          }} ></div>
        <div className={`${s['about-image-overlay-solid']}`}></div>
        <div className={`container ${s['photo-container']}`}>
          <div className={`row container-table ${s['header-row']}`}>
            <div className={`${s['photo-content']} `}>
              <div className={`${s['meta-light']} ${s['photo-text']} text-center ${s['content-meta']}`}>
                {/* <h3 className={`${s.title}`}>Parade to the Polls</h3> */}
                <img className={`${s['parade-photo']}`} src="https://dh136thgitkrt.cloudfront.net/empowerment-plan-logo.png" alt=""/>

                <div className={`${s.subtitle}`}>Learn about 2016's five-day campaign designed to raise funds for the highly mobile community in Chicago.</div>
              </div>
              <div className='text-center'>
                <Link rel="canonical"  className={` ${s['button']} ${s['button-orange-fill']}`} to='/warmestwinter'>Learn more
                  <i className={`fa fa-angle-right ${s.fa}`}></i>
                </Link>
              </div>
            </div>


          </div>
        </div>
      </div>




        <div className={`${s['media-container']}`}>
          <div className={`${s['about-image']}`}
            style={{
              backgroundImage: 'url(https://dh136thgitkrt.cloudfront.net/parade-1.jpg)',
              backgroundPosition: 'center'
            }} ></div>
          <div className={`${s['about-image-overlay']}`}></div>
          <div className={`container ${s['photo-container']}`}>
            <div className={`row container-table ${s['header-row']}`}>
              <div className={`${s['photo-content']} `}>
                <div className={`${s['meta-light']} ${s['photo-text']} text-center ${s['content-meta']}`}>
                  {/* <h3 className={`${s.title}`}>Parade to the Polls</h3> */}
                  <img className={`${s['parade-photo']}`} src="https://dh136thgitkrt.cloudfront.net/flex_vote.png" alt=""/>

                  <div className={`${s.subtitle}`}><strong>Flex Your Vote: A Millennial Celebration of Democracy</strong>, an initiative created with Chicago’s <strong>Prime Fortune</strong>, was designed to help millennial voters navigate the election space.</div>
                </div>
                <div className='text-center'>
                  <Link rel="canonical"  className={`${s['button']} ${s['button-red']}`} to='/paradetothepolls'>Learn more
                    <i className={`fa fa-angle-right ${s.fa}`}></i>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>



        <div className={`${s['media-container']} ${s['openmike-container']}`}>
          <div className={`${s['about-image']}`}
            style={{
              backgroundImage: 'url(https://dh136thgitkrt.cloudfront.net/openmike/open-mike-cover-page.jpg)',
              backgroundPosition: 'top',
              top: '-10%',
              opacity: '1'
            }} ></div>
            <div className={`${s['about-image-overlay-openmike']}`}></div>



          <div className={`container ${s['photo-container']}`}>
            <div className={`row container-table ${s['header-row']}`}>
              <div className={`${s['photo-content']} `}>
                <div className={`${s['meta-light']} ${s['photo-text']} text-center ${s['content-meta']}`}>
                  {/* <h3 className={`${s.title}`}>Parade to the Polls</h3> */}
                  <img className={`${s['openmike-photo']}`} src="https://dh136thgitkrt.cloudfront.net/openmike/open-mike-logo.png" alt=""/>
                  <div className={`${s['meta-light']} ${s['content-quote']}`}>
                    “Indeed, there is no better way to celebrate Brother Mike’s passing than with an Open Mike; this is his legacy. Spaces like YOUmedia were initially created in the spirit of growth, and the Open Mike only further pushes that philosophy.
                    <br/><br/>
                    The event openly accepts the kids’ hopes, dreams, fears and realities, allowing them to be unapologetically themselves.”</div>
                  {/* <div className={`${s.subtitle}`}>This is your stage, your crowd, your community.</div> */}
                </div>
                <div className='text-center'>
                  <Link rel="canonical"  className={` ${s['button']} ${s['button-salmon']}`} to='/openmike'>Learn more
                    <i className={`fa fa-angle-right ${s.fa}`}></i>
                  </Link>
                </div>
              </div>


            </div>
          </div>
        </div>
    </div>
  )
}

export default withStyles(s)(Initiatives)
