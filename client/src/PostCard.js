import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import {Link} from 'react-router-dom'

const PostCard = ({ post, deletePost }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <Button handleClick={() => deletePost(post)}>DELETE</Button>
      <Link to={`/post/${post._id}`}>View Post</Link>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostCard
