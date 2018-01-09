import React, {Component} from 'react'
import $ from 'jquery'
import CreatePostForm from './CreatePostForm'
import PropTypes from 'prop-types'
import {
  withRouter
} from 'react-router-dom'

class CreatePostContainer extends Component {
  state = {
    img: undefined,
    title: undefined,
    author: undefined,
    message: undefined
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    loadPostsFromServer: PropTypes.func.isRequired
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  handleSubmit = (e) => {
    e.preventDefault()
    const {img, title, author, message} = this.state
    const newPost = {img, title, author, message}
    $.ajax({
      url: '/api/posts',
      method: 'POST',
      data: newPost
    }).done((response) => {
      this.props.loadPostsFromServer()
      this.props.history.push('/posts')
    })
  }

  render () {
    return (
      <div>
        <div>
          <CreatePostForm
            onChangeHandler={this.onChangeHandler}
            handleSubmit={this.handleSubmit}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(CreatePostContainer)
