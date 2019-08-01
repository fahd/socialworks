import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';

class ErrorPage extends React.Component {
  render() {
    return (
      <div className={s.page}>
        <div className={`${s['bg']}`}></div>
        <div className={`${s['overlay']}`}></div>
          <div className={`${s['container']} container-table`}>
            <div className={`${s['content']}`}>
              <div className={`${s['meta']}`}>
                <div><img className={s.image} src="full-icon.png" alt=""/></div>
                <div>
                <button onClick={() => this.props.renderView('home')} className={s.button}>Visit Home</button>
                <button onClick={() => this.props.renderView('video')} className={`${s.button} ${s.stream}`}>Watch Livestream</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export {ErrorPage as ErrorPageWithoutStyle};
export default withStyles(s)(ErrorPage);
