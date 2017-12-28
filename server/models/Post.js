const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Post = new Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  message: { type: String, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
})

module.exports = mongoose.model('Post', Post)
