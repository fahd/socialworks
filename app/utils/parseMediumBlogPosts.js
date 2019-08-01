var _ = require ('lodash')

function parseJSON (file) {
  const postList = []
  let basePostURL = 'https://medium.com/socialworks/'
  let baseImageURL = 'https://cdn-images-1.medium.com/'
  _.each(file.payload.references.Post, (data,key) =>{
    let post = {};
    post.id = data.id
    post.title=data.title
    post.imageURL=`${baseImageURL}${data.virtuals.previewImage.imageId}`
    post.subtitle = data.content.subtitle || ''
    post.publishedData = data.virtuals.latestPublishedAtAbbreviated
    post.postURL=`${basePostURL}${data.uniqueSlug}`
    postList.push(post)
  })
  return postList
}

module.exports = parseJSON;
