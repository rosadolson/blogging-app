import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import PropTypes from 'prop-types'
import EditPostForm from './EditPostForm'

class EditPostContainer extends Component {
  state = {
    img: undefined,
    title: undefined,
    author: undefined,
    message: undefined,
    loading: true
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount () {
    this.loadPostFromServer()
  }

  onChangeHandler = (e) => this.setState({ [e.target.id]: e.target.value })

  loadPostFromServer = (post) => {
    $.ajax({
      url: `/api/posts/${this.props.match.params.postId}`,
      method: 'GET'
    }).done((response) => {
      const {img, title, author, message} = response.data
      this.setState({
        img,
        title,
        author,
        message,
        loading: false
      })
    })
  }

  submitPostToServer = (e) => {
    e.preventDefault()
    const {img, title, author, message} = this.state
    const post = {img, title, author, message}
    $.ajax({
      url: `/api/posts/${this.props.match.params.postId}`,
      method: 'PUT',
      data: post
    }).done((response) => {
      console.log('PUT is working!', response)
      alert(`${response.data.title} has been updated.`)
      this.props.history.push(`/post/${response.data._id}`)
    })
  }

  render () {
    const {img, title, author, message} = this.state
    return (
      <div>
        {
          !this.state.loading
            ? <EditPostForm
              img={img}
              title={title}
              author={author}
              message={message}
              onChangeHandler={this.onChangeHandler}
              submitPostToServer={this.submitPostToServer}
            />
            : <p>Loading Edit Post Form... </p>
        }
      </div>
    )
  }
}

export default withRouter(EditPostContainer)
