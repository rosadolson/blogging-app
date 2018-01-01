import React from 'react'
import PropTypes from 'prop-types'

const ViewPostCard = ({ post }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.message}</p>
    </div>
  )
}

ViewPostCard.propTypes = {
  post: PropTypes.object.isRequired
}

export default ViewPostCard
