const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema({
  name: { type: String, required: true },
  icon: { type: String, required: true },
  message: { type: String, required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post' }
})

module.exports = mongoose.model('Comment', Comment)
