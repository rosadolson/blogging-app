import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const PostCard = ({ post, deletePost }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.message}</p>
      <button onClick={() => deletePost(post)}>DELETE</button>
      <Link to={`/posts/${post._id}`}>View Post</Link>
      <Link to={`/edit-post/${post._id}`}>Edit Post</Link>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostCard
