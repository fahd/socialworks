var _ = require ('lodash')
var request = require('request')
var parseSingleMediumPost = require('./parseSingleMediumPost')
var Firebase = require('firebase')
var auth = require('./auth')
var ref = auth.ref
var firebaseAuth = auth.firebaseAuth

function saveToFirebase(post) {
  let data = {id, postID, date, title, description, subtitle, tags, content} = post
  ref.child(`medium/${data.id}`)
  .set(data)
}

function parseJSON (file) {
  const postList = []
  let basePostURL = 'https://medium.com/socialworks/'
  let baseImageURL = 'https://cdn-images-1.medium.com/'
  _.each(file.payload.references.Post, (data,key) =>{
    let post = {};
    post.id = data.id
    post.title=data.title
    post.imageURL=`${baseImageURL}${data.virtuals.previewImage.imageId}`
    post.slug = data.slug
    post.publishedData = data.virtuals.latestPublishedAtAbbreviated
    post.url=`${basePostURL}${data.uniqueSlug}`
    postList.push(post)
    var finalPost = parseSingleMediumPost(request, post)
    .then(function(v){
      let firebaseObject = v
      saveToFirebase(firebaseObject)
    })
  })
  return postList;
}

module.exports = parseJSON;
