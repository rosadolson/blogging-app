import React from 'react'
import PropTypes from 'prop-types'

const PostCard = ({ post }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.message}</p>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostCard
