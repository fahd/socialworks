import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './index.css'
import Link from '../../../Link'
import Loading from '../../../Loading'
import Waypoint from 'react-waypoint'
import _ from 'lodash'
import moment from 'moment'

class NewsCard extends React.Component {
  constructor(props) {
    super(props)
    this.generateNewsCard = this.generateNewsCard.bind(this)
  }

  state = {
    loading: false
  }

  generateNewsCard(posts) {
    var postArray = _.map(posts, post => post).sort((a,b) => {return a.date < b.date})
    return (
      <div>
      {_.map(postArray, post => {
        return (
          <div key={post.title} className={`${s['hero-module-container']} col-xs-12 col-sm-6 col-md-4 col-lg-4 `}>
            <Link rel="canonical" to={`/news/${post.id}`} className={`${s.cardContainer}`}>
              <div
                className={`${s.cardHeader}`}
                style={{
                  backgroundImage:`url('${post.coverImageUrl}')`
                }}
                >
              </div>
              <div className={`${s['cardBio']} ${s['meta']}`}>
                <h2 className={s.cardTitle}>{post.title}</h2>
                <h4 className={s.cardDate}>{moment(post.date*1000).format('MMMM Do, YYYY')}</h4>
                <p className={`${s['card--content-text']}`}>{post.description.slice(0,-27)}</p>
              </div>
            </Link>
          </div>
        )
      })}
      </div>
    )
  }

  render() {
    let posts = [];
    if (this.props.posts) {
      posts = this.props.posts
    }

    return (
      <div>
        <div>
          <h2 className={`text-center ${s.meta} ${s.homeInitiativesTitle}`}>Latest News</h2>
        </div>
        <div className={`${s.container} empty-space-bottom`}>
          <div className={`row ${s.row}`}>
            <div className={`${s['content-meta']} ${s['content-meta-initiatives']}`}>
              {posts ? this.generateNewsCard(posts) : loading}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(NewsCard)
