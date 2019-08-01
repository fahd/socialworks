import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import NewsCard from './NewsCard'
import Link from '../../Link'
import superAgent from 'superagent'
import {downloadFirebasePosts} from '../../../actions/runtime'

class NewsCardContainer extends React.Component {

  state = {
    posts: false
  }

  constructor(props) {
    super(props)
    this.fetchPosts = this.fetchPosts.bind(this)
  }

  fetchPosts() {
    var _this = this
    let posts = downloadFirebasePosts()
    .then(snapshot => {
      let posts = snapshot.val()
      _this.setState({posts})
    })
  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    let posts = this.state.posts
    return (
      <div>
        <div className={`${s.container}`}>
          <div className={s.bg}></div>
          <div className={s.overlay}></div>
          <div className={`container ${s['header-container']}`}>
            <div className={`row container-table ${s['header-row']}`}>
              <div className={`${s['header-content']}`}>
                <div className={`${s['meta-light']} ${s['header-text']} text-center`}>
                  <h2 className={`${s.title} ${s['news-title']}`}>SocialWorks In the News</h2>
                  <div className={`${s.subtitle}`}>Receive the latest information about awards, accomplishments, and other important distinctions as news outlets and the media report on our goals for achieving creative, positive, spaces for our youth.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NewsCard posts={posts}></NewsCard>
      </div>
    )
  }
}

export default withStyles(s)(NewsCardContainer)
