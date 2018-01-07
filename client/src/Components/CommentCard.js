import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const CommentCard = ({ comment, deleteComment }) => {
  return (
    <div>
      <img alt='' src={comment.icon} />
      <p>{comment.username}</p>
      <p>{comment.message}</p>
      <Button handleClick={() => deleteComment(comment._id)}>DELETE</Button>
    </div>
  )
}

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentCard
