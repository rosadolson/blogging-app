const express = require('express')
const Router = express.Router()
const Comment = require('../models/Comment')
const Post = require('../models/Post')

Router.route('/api/posts/:postId/comments')
  .post((req, res) => {
    const { name, icon, message } = req.body
    const newComment = { name, icon, message }
    Comment(newComment).save((err, savedComment) => {
      if (err) {
        res.json({ error: err })
      } else {
        Post.findById({ _id: req.params.postId }, (err, post) => {
          if (err) {
            res.json({ error: err })
          } else {
            post.comments.push(savedComment._id)
            post.save((err, updatedPost) => {
              if (err) {
                res.json({ error: err })
              } else {
                res.json({ msg: 'SUCCESS', data: updatedPost })
              }
            })
          }
        })
      }
    })
  })

Router.route('/api/comments/:commentId')
  .delete((req, res) => {
    const commentId = req.params.commentId
    Comment.remove({ _id: commentId }, (err, comment) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `DELETED: ${commentId}`, data: comment })
      }
    })
  })

module.exports = Router
