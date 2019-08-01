import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ParadePollSlider.css';
import Link from '../../Link'

class ParadePollSlider extends React.Component {

  render() {
    return (
      <div className={s.container}>
        <div className={s.background}>
          <div className={s.content}>
            <div className={s.bg}></div>
            <div className={s.overlay}></div>
            <div className={`${s['content-meta']}`}>
              <div>
                <h1 data-txt="home.parade-title" className={`${s.meta} ${s.title}`}>Parade to the Polls</h1>
                <span className={`${s.meta} ${s.subtitle}`}> An election day initiative to get out the vote </span>
                <div className={`${s['btn-info']}`}>
                  <Link rel="canonical"  className={`btn ${s.button} ${s.meta}`} to='/paradetothepolls'>Find out more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(ParadePollSlider);
// <section className={`${s.home} hero`}>
//   <ul className={`${s['home-slider']} ${s.slider}`}>
//     <li/>
//     <li/>
//     <li/>
//     <li/>
//   </ul>
//   <div className={`${s.container} `}>
//     <div className={`${s['container-content']}`}>
//       <h2 className={`${s['home-headline']}`}>
//         <span>to inspire creativity,</span><br/>
//         <span>to build dreams,</span><br/>
//         <span>to let you,</span><br/>
//         <span>be you.</span><br/>
//       </h2>
//     </div>
//   </div>
//   <div className={`${s.row} ${s.footer}`}>
//     <div className={`${s['col-sm-12']}`}>
//       <a href='#about'>
//         <span className={`${s.scroll}`}>find out more</span>
//       </a>
//     </div>
//   </div>
// </section>
