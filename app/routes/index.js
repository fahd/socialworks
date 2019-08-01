/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/',

  // Keep in mind, routes are evaluated in order
  children: [
    // reads the 'path' property in each of these
    require('./home').default,
    require('./about').default,
    // require('./initiatives').default,
    require('./paradetothepolls').default,
    require('./kok').default,
    require('./news').default,
    require('./openmike').default,
    require('./warmestwinter').default,
    require('./supportCPS').default,
    require('./donate').default,
    require('./volunteer').default,
    require('./ar').default,
    require('./sitemap').default,
    require('./event').default,
    require('./admin').default,
    require('./error').default,
    // require('./newchance').default,
    // require('./download-volunteer-list').default,
    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    require('./notFound').default
  ],

  async action ({ next }) {
    // Execute each child route until one of them return the result
    const route = await next()
    // Provide default values for title, description etc.
    route.title = `${route.title || 'Untitled Page'}`
    route.description = route.description || ''
    route.cardImage = route.cardImage || ''
    route.ogTitle = route.ogTitle || '',
    route.ogDescription = route.ogDescription || '',
    route.ogImage = route.ogImage || '',
    route.twitterCardImage = route.twitterCardImage || ''
    route.twitterCardDescription = route.twitterCardDescription || ''

    return route
  }

}
