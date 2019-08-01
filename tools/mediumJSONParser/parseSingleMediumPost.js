var moment = require('moment')
var _ = require('lodash')
var gradientChoices = [
  '#39daa9',
  'linear-gradient(140deg, #90e4ff 10%, #41adec 80%)',
  'linear-gradient(160deg, #7952c5 20%, #c559d1 80%)',
  'linear-gradient(160deg, #ff9d43 20%, #f54444 80%)',
  '#E91E63',
]

function randomSelector(keyphrase){

}

function parseSingleMediumPost(request, post) {
  let {url} = post
  let articleURL = `${url}?format=json`
  return new Promise(function(resolve, reject) {
    request(articleURL, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        let jsonBody = JSON.parse(body.replace('])}while(1);</x>', ''))
        let result = parseJSON(jsonBody)
        resolve(result)
      }
    })
  })
}

function parseTags(tagsArray) {
  var output = [];
  _.each(tagsArray, tag => output.push(tag.name))
  return output.join(',')
}

function parseJSON(body) {
  // https://cdn-images-1.medium.com/max/1200/ is where image urls are
  let dateUnix = body.payload.value.createdAt / 1000;
  let description = body.payload.value.virtuals.metaDescription
  let post = {
    id: body.payload.value.slug,
    postID: body.payload.value.id,
    coverImageUrl: `https://cdn-images-1.medium.com/${body.payload.value.virtuals.previewImage.imageId}`,
    date:dateUnix,
    title: body.payload.value.title,
    description: `${description.length > 0 ? description : body.payload.value.title} - Published by SocialWorks`,
    subtitle: body.payload.value.content.subtitle,
    tags: parseTags(body.payload.value.virtuals.tags),
    content: body.payload.value.content.bodyModel.paragraphs
  }
  return post
}

module.exports = parseSingleMediumPost
