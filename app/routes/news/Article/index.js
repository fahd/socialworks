import React, { PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './index.css';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import Article from '../../../components/Pages/News/Article'

class NewsContainer extends React.Component {
  render() {
    let {title, description, keywords} = this.props
    return (
      <div>
        <Header navbarAbsolute={false}/>
        <Article article={this.props.article}/>
        <Footer/>
      </div>
    );
  }
}

export default withStyles(s)(NewsContainer);
