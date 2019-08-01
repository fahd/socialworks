import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import DisqusThread from './DisqusThread.js';
import s from './index.css'

class Disqus extends React.Component {

  render() {
    var location = this.props.path;
    var id = this.props.id;
    var backgroundColor = this.props.color;
    var source = this.props.source;
    var url = `/${source}/${location}`

    return (
      <div
        className={`${s.disqusContainer}`}
        style={{backgroundColor:backgroundColor}}>
        <div className={`${s.disqusContent}`}>
          <DisqusThread id={id} title={`SocialWorks Chicago`} path={url}/>
        </div>
      </div>
    );
  }

}

export default withStyles(s)(Disqus);
