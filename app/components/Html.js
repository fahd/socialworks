import React, {PropTypes} from 'react';
import serialize from 'serialize-javascript';
import {analytics} from '../config';

class Html extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    style: PropTypes.string,
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    state: PropTypes.object,
    children: PropTypes.string
  };

  render() {
    const {
      title,
      description,
      keywords,
      cardImage,
      twitterCardImage,
      twitterCardDescription,
      ogTitle,
      ogDescription,
      ogImage,
      style,
      scripts,
      state,
      children
    } = this.props;
    return (
      <html className="no-js" lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta name="author" content="SocialWorks, Inc."/>
          <title>{title}</title>
          <meta name="description" content={description}/>
          <meta name="google-site-verification" content="DfTcHa3Ibgs6dwbhnWva1wHxASDyOebtGr1wb6tUfvg" />
          <meta name="keywords" content={`chance, chance the rapper, chance the rapper charity, socialworks, social works, social works chicago, socialworkschicago, coloring book, socialworkschi, the social experiment, magnificent coloring day, youth empowerment, youth advocacy, warmest winter, parade to the polls, openmike, volunteer, community, millenial, non-profit, nonprofit, young people, chicago, illinois, chancelor bennett${keywords ? `, ${keywords}` : ''}`}/>
          <meta property="og:site_name" content="SocialWorks - Empowering youth through the arts, education and civic engagement."/>
          <meta property="og:title" content={`${ogTitle ? ogTitle : 'SocialWorks – Empowering youth through engagement'}`}/>
          <meta property="og:description" content={`${ogDescription ? ogDescription : 'To inspire creativity. To build dreams. To let you, be you!'}`}/>
          <meta property="og:url" content="http://www.socialworkschi.org/"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image" content={`${cardImage ? cardImage : 'http://dh136thgitkrt.cloudfront.net/greenlogo.png'}`}/>
          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:site" content="@SocialWorks_Chi"/>
          <meta name="twitter:creator" content="@SocialWorks_Chi"/>
          <meta name="twitter:description" content={`${twitterCardDescription ? twitterCardDescription : 'To inspire creativity. To build dreams. To let you, be you! Lets Connect: info@socialworkschi.com'}`}/>
          <meta name="twitter:image" content={`${twitterCardImage ? twitterCardImage : 'https://pbs.twimg.com/profile_images/816376834795270145/kXh8Ld6V_400x400.jpg'}`}/>
          <meta name="twitter:url" content="http://www.socialworkschi.org"/>
          <link rel="icon" href="/apple-touch-icon.png"/>
          <link rel="icon" href="/favicon.ico" type="image/x-icon"/>
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700" rel="stylesheet"/>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
          <link rel="stylesheet" href="/css/bootstrap.min.css"/>
          {style && <style id="css" dangerouslySetInnerHTML={{
            __html: style
          }}/>}
        </head>
        <body>
          <div id="app" dangerouslySetInnerHTML={{
            __html: children
          }}/> {state && (<script dangerouslySetInnerHTML={{
            __html: `window.APP_STATE=${serialize(state, {isJSON: true})}`}}/>)}

          {scripts && scripts.map(script => <script key={script} src={script}/>)}
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvbyfmxY__l00aMWK3dUXeifgegGY7bqg&libraries=places"></script>
          {analytics.google.trackingId && <script dangerouslySetInnerHTML={{
            __html: 'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' + `ga('create','${analytics.google.trackingId}','auto');ga('send','pageview')`
          }}/>}
          {analytics.google.trackingId && <script src="https://www.google-analytics.com/analytics.js"/>}
        </body>
      </html>
    );
  }
}

export default Html;
