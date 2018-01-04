import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import ViewPostCard from './ViewPostCard'
import PropTypes from 'prop-types'

class ViewPostContainer extends Component {
  state = {
    post: undefined,
    comments: undefined,
    username: '',
    icon: '',
    message: '',
    loading: true
  }

  static propTypes = {
    match: PropTypes.object.isRequired
  }

  componentDidMount () {
    const postId = this.props.match.params.postId
    this.loadPost(postId)
  }

  loadPost = (id) => {
    $.ajax({
      url: `/api/posts/${id}`,
      method: 'GET'
    }).done((response) => {
      // console.log('View Post', response)
      this.setState({
        post: response.data,
        comments: response.data.comments,
        loading: false
      })
    })
  }

  deleteComment = (comment) => {
    $.ajax({
      url: `/api/posts/${comment._id}`,
      method: 'DELETE'
    }).done((response) => {
      console.log('Working!', response)
      this.loadPost(this.props.match.params.postId)
    })
  }

  handleCommentSubmit = (e) => {
    e.preventDefault()
    const {username, icon, message} = this.state
    const newComment = {username, icon, message}
    $.ajax({
      url: `/api/posts/${this.props.match.params.postId}/comments`,
      method: 'POST',
      data: newComment
    }).done((response) => {
      this.loadPost(this.props.match.params.postId)
      this.setState({ username: '', icon: '', message: '' })
    })
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  render () {
    const {post, comments, username, icon, message} = this.state
    return (
      <div>
        {
          !this.state.loading
            ? <ViewPostCard
              post={post}
              comments={comments}
              username={username}
              icon={icon}
              message={message}
              deleteComment={this.deleteComment}
              onChangeHandler={this.onChangeHandler}
              handleCommentSubmit={this.handleCommentSubmit}
            />
            : 'Post not available.'
        }
      </div>
    )
  }
}

export default withRouter(ViewPostContainer)
