import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './HomeMedium.css'
import BlogSlider from './HomeMediumSlider.js'
import {downloadMediumBlogPosts} from '../../../actions/runtime'
import superAgent from 'superagent'


class HomeMedium extends React.Component {
  constructor(props) {
    super(props)
    this.fetchPosts = this.fetchPosts.bind(this)
  }

  state = {
    posts: false
  }

  fetchPosts (){
    const _this = this
    downloadMediumBlogPosts()
    .end(function(err, res) {
      if (res){
        let posts = res.body
        _this.setState({posts})
      } else {
        console.log('err on HTTP fetch posts', err)
      }
    })

  }

  componentDidMount() {
    this.fetchPosts()
  }

  render() {
    if (!this.state.posts){
      return <div>Loading</div>
    }

    return (
      <div>
        <BlogSlider {...this.state.posts}/>
      </div>
    )
  }
}

export default withStyles(s)(HomeMedium)
