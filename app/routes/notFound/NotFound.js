import React, {PropTypes} from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './NotFound.css';
import Link from '../../components/Link'

class NotFound extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className={s.page}>
        <div className={`${s['bg']}`}></div>
        <div className={`${s['overlay']}`}></div>

          <div className={`${s['container']} container-table`}>
            <div className={`${s['content']}`}>
              <div className={`${s['meta']}`}>
                <h1 className={`${s['notFoundTitle']}`}>Sorry!</h1>
                <p className={`${s['notFoundSubtitle']}`}>the page you were trying to view does not exist!</p>
                <Link rel="canonical"  className={s.button} to='/'>Return to Home</Link>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default withStyles(s)(NotFound);
