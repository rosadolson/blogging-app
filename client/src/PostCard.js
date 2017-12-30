import React from 'react'
import PropTypes from 'prop-types'

const PostCard = ({ post, deletePost }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.message}</p>
      <button onClick={() => deletePost(post)}>DELETE</button>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostCard
