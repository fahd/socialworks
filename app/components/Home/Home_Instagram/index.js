import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import _ from 'lodash'
import {getInstagramPosts} from '../../../actions/runtime'
import Waypoint from 'react-waypoint'
import Loading from '../../Loading'


class HomeMedium extends React.Component {
  state = {
    posts: null,
    loading: false,
    feed: null
  }
  constructor(props) {
    super(props)
    this.fetchPosts = this.fetchPosts.bind(this)
    this.onLoadPosts = this.onLoadPosts.bind(this)
  }

  onLoadPosts() {
    this.fetchPosts();
  }

  fetchPosts() {
    const _this = this
    getInstagramPosts().end(function(err, res) {
      if (res) {
        let posts = res.body.slice(0,8)
        _this.setState({posts, loading: true})
      } else {
        console.log('err on HTTP fetch posts', err)
      }
    })
  }

  render() {
    return (
      <div className={`${s['instagram-container']}`}>
        <div className={`${s['title-container']}`}>
          <h4 className={`${s['title']}`}>
            In the community
          </h4>
        </div>
        <Waypoint onEnter={() => this.onLoadPosts()}/>
        {this.state.loading ?
          (
            <ul className={`${s['gallery']}`}>
            {_.map(this.state.posts, post => {
                return (
                  <li key={post.code} className={s.igSnapshot} style={{backgroundImage: `url(${post.images.standard_resolution.url})`}}>
                    <a target='_blank' href={post.link}>
                      {/* <img className={`${s['lazy']}`} src={post.images.standard_resolution.url} alt=""/> */}
                      <div className={`${s['gallery-overlay']}`}>
                        <div className={`${s['gallery-text']}`}>
                          <h3 className={`${s['gallery-text-title']}`}>{post.caption === null ? 'SocialWorks' : post.caption.text}</h3>
                        </div>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          ) : <div className={s.loader}>Loading...</div>}
      </div>
    )
  }
}

export default withStyles(s)(HomeMedium)
