import React, {PropTypes} from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import {shortenUrl, hash} from '../../../../actions/runtime'
import s from './index.css'
import Slider from 'react-slick'
import Link from '../../../Link'
import Scroll from 'react-scroll'
import Waypoint from 'react-waypoint'
import moment from 'moment'
import _ from 'lodash'
const scroller = Scroll.scroller
const Element = Scroll.Element


const generateMarkup = (item) => {
  if (item.href){
    return (
      <div key={item.href}><a target="_blank" className={s.link} href={`${item.href}`}>{item.href}</a></div>
    )
  }
}

const generateIframeUrl = string => `https://www.youtube.com/embed/${string.split("%2F")[4]}`


class Article extends React.Component {

  state = {
    shareWidget: false,
  }

  constructor(props) {
    super(props)
    this.onFade = this.onFade.bind(this)
    this.generateBodyContent = this.generateBodyContent.bind(this)
    this.generateTwitterLink = this.generateTwitterLink.bind(this)
    this.generateDisqusId = this.generateDisqusId.bind(this)
  }

  generateDisqusId(title,url){
    return `${url}-${hash(title,url)}`
  }

  onFade(element) {
    switch (element) {
      case 'shareWidgetTrue':
        return this.setState({shareWidget: true})
        break;
      case 'shareWidgetFalse':
      return this.setState({shareWidget: false})
      break;
    }
  }

  generateBodyContent(content){
    if (content.markups){
      return content.markups.map(item => generateMarkup(item))
    }

    else if (content.iframe){
      return (
        <iframe
          key = {content.iframe.thumbnailUrl}
          className={s.iframe}
          height={`${content.iframe.iframeHeight}`}
          src={`${generateIframeUrl(content.iframe.thumbnailUrl)}`}
          frameBorder="0"
          allowFullScreen
        />
      )
    }

    else {
      return (
      <div key={content.name} className={`${s['text-body']}`}>
        <div className={`${s.text}`}>
          {content.text}
        </div>
      </div>
      )
    }
  }

  generateTwitterLink(title,link){
    var capitalizedLink = title.split('-').map(i=> `${i[0].toUpperCase()}${i.slice(1)}`).join('%20')
    return `https://twitter.com/home?status=${capitalizedLink}%20-%20%0Ahttp%3A//www.socialworkschi.org/news/${link}`
  }

  render() {
    let article = this.props.article
    let words = this.props.article.content.slice(3)
    let path = this.props.article.id;
    let id = this.props.article.postID;
    return (
      <div className={s.name}>
        <div className={`${s.coverContainer}`}>
          <div
            className={s.bg}
            style={{backgroundImage:`url('${article.coverImageUrl}')`}}
            ></div>
          <div className={s.overlay}></div>
          <div className={`container ${s['header-container']}`}>
            <div className={`row container-table ${s['header-row']}`}>
              <div className={`${s['header-content']}`}>
                <div className={`${s['meta-light']} ${s['header-text']}`}>
                  <h1 className={`${s.coverTitle} ${s['news-title']}`}>{article.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Port this to another component */}
        <div className={`container-hide ${s.shareWidgetContainer} ${this.state.shareWidget ? 'fadeIn' : ''}`}>
          <div className={`${s.shareWidget} text-center`}>
            <ul>
              <li className={s.shareWidgetTitle}>Share</li>
              <li className={s.shareWidgetTitle}><a href={`https://www.facebook.com/sharer/sharer.php?u=www.socialworkschi.org/news/${article.id}`} target='_blank'><i className={`fa fa-facebook ${s['fa']}`}></i></a></li>
              <li className={s.shareWidgetTitle}><a href={this.generateTwitterLink(article.title, article.id)} target='_blank'><i className={`fa fa-twitter ${s['fa']}`}></i></a></li>
            </ul>
          </div>
        </div>
        <div className={`container ${s['container']}`}>
          <div className={`empty-space ${s['text-content']}`}>
            <div className={`${s['text-header']}`}>
              <img className={s.articleIcon} src="/full-icon.png" alt="Full Icon"/>
              <div className={`${s['articleIntro']} ${s['meta']}`}>
                <h3>SocialWorks</h3>
                <h4>{
                  moment
                  .unix(article.date)
                  .format('MMMM Do, YYYY')
                }
                </h4>
              </div>
              <a className={s.mediumButton} href="http://www.medium.com/socialworks" target="_blank">Follow on Medium</a>
            </div>
            <div className={`${s['text-header']}`}>
              <h2 className={`${s['text-title']} text-center`}>{article.subtitle}</h2>
            </div>
            <div className='row empty-space-bottom'>
              <div className='col-sm-12 col-md-12'>
                <Waypoint onEnter={() => this.onFade('shareWidgetTrue')}/>
                {_.map(words, paragraph => this.generateBodyContent(paragraph))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Article)
