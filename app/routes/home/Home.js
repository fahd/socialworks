import React, {PropTypes} from 'react'
import Header from '../../components/Header'
import HomeIntro from '../../components/Home/Home_Intro'
import HomeDonate from '../../components/Home/Home_Donate'
import HomeShop from '../../components/Home/Home_Shop'
import HomeInstagram from '../../components/Home/Home_Instagram'
import Footer from '../../components/Footer'
import SupportCPSSlider from '../../components/MainSliders/SupportCPSSlider'

class Home extends React.Component {
  render() {
    return (
      <div>
          <Header navbarAbsolute={true}/>
          <SupportCPSSlider/>
          <HomeIntro/>
          <HomeDonate/>
          <HomeShop/>
          {/* <HomeInstagram/> */}
          <Footer/>
      </div>
    )
  }
}

export default Home
