import React from 'react'
import PropTypes from 'prop-types'

const CommentCard = ({ comment, deleteComment }) => {
  return (
    <div>
      <img alt='' src={comment.icon} />
      <p>{comment.username}</p>
      <p>{comment.message}</p>
      <button onClick={deleteComment(comment)}>DELETE</button>
    </div>
  )
}

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentCard
