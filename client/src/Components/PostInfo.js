import React from 'react'
import PropTypes from 'prop-types'

const PostInfo = ({ post, message }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{message}</p>
    </div>
  )
}

PostInfo.propTypes = {
  post: PropTypes.object.isRequired,
  message: PropTypes.string
}

export default PostInfo
