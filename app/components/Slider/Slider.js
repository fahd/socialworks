import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import {canUseDOM} from 'fbjs/lib/ExecutionEnvironment';
import s from './Slider.css';
import withViewport from '../Viewport';

const Slider = (props) => {

  let el = props.class


  return (
    <div className={s.container}>
      <div className={s.background}>
        <div className={s.content}>
           <div className={`${s.bg} ${s[el]}`}></div>
          <div className={s.overlay}></div>
        </div>
      </div>
    </div>
  )

}

export default withViewport(withStyles(s)(Slider));
