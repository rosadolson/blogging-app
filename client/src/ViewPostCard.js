import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const ViewPostCard = ({ post }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.message}</p>
      <Link to={`/edit-post/${post._id}`}>Edit Post</Link>
    </div>
  )
}

ViewPostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default ViewPostCard
