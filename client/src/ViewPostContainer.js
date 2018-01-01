import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import $ from 'jquery'
import ViewPostCard from './ViewPostCard'
import PropTypes from 'prop-types'

class ViewPostContainer extends Component {
  state = {
    post: undefined,
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
      this.setState({ post: response.data, loading: false })
    })
  }

  render () {
    return (
      <div>
        {
          !this.state.loading
            ? <ViewPostCard post={this.state.post} />
            : 'Post not available.'
        }
      </div>
    )
  }
}

export default withRouter(ViewPostContainer)
