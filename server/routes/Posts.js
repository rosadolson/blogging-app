const express = require('express')
const Router = express.Router()
const Post = require('../models/Post')

Router.route('/api/posts')
  .post((req, res) => {
    const { img, title, author, message } = req.body
    const newPost = { img, title, author, message }
    Post(newPost).save((err, savedPost) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: 'SUCCESS', data: savedPost })
      }
    })
  })

Router.route('/api/posts')
  .get((req, res) => {
    Post.find()
      .populate('comments')
      .exec((err, posts) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: 'SUCCESS', data: posts })
        }
      })
  })

Router.route('/api/posts/:postId')
  .get((req, res) => {
    const postId = req.params.postId
    Post.findById({ _id: postId })
      .populate('comments')
      .exec((err, post) => {
        if (err) {
          res.json({ error: err })
        } else {
          res.json({ msg: `FOUND: ${postId}`, data: post })
        }
      })
  })

Router.route('/api/posts/:postId')
  .put((req, res) => {
    const postId = req.params.postId
    Post.findById({ _id: postId }, (err, post) => {
      if (err) {
        res.json({ error: err })
      } else {
        post.img = req.body.img ? req.body.img : post.img
        post.title = req.body.title ? req.body.title : post.title
        post.author = req.body.author ? req.body.author : post.author
        post.message = req.body.message ? req.body.message : post.message
        post.save((err, updatedPost) => {
          if (err) {
            res.json({ error: err })
          } else {
            res.json({ msg: `UPDATED: ${postId}`, data: updatedPost })
          }
        })
      }
    })
  })

Router.route('/api/posts/:postId')
  .delete((req, res) => {
    const postId = req.params.postId
    Post.remove({ _id: postId }, (err, post) => {
      if (err) {
        res.json({ error: err })
      } else {
        res.json({ msg: `DELETED: ${postId}`, data: post })
      }
    })
  })

module.exports = Router
