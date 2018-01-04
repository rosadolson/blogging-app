const express = require('express')
const Router = express.Router()
const Comment = require('../models/Comment')
const Post = require('../models/Post')

Router.route('/api/posts/:postId/comments')
  .post((req, res) => {
    const { username, icon, message } = req.body
    const newComment = { username, icon, message }
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

Router.route('/api/posts/:postId/comments')
  .get((req, res) => {
    Comment.find((err, comments) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: comments })
      }
    })
  })

Router.route('/api/posts/comments/:commentId')
  .put((req, res) => {
    const commentId = req.params.commentId
    Comment.findById({ _id: commentId }, (err, comment) => {
      if (err) {
        res.json({ error: err })
      } else {
        comment.username = req.body.username ? req.body.username : comment.username
        comment.icon = req.body.icon ? req.body.icon : comment.icon
        comment.message = req.body.message ? req.body.message : comment.message
        comment.save((err, updatedComment) => {
          if (err) {
            res.json({ error: err })
          } else {
            res.json({ msg: `UPDATED: ${commentId}`, data: updatedComment })
          }
        })
      }
    })
  })

Router.route('/api/posts/comments/:commentId')
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
