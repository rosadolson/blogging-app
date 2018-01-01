import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const CommentList = ({ comments, deleteComment }) => {
  return (
    <div>
      {
        comments && comments.length > 0
          ? comments.map((comment, index) => {
            return <CommentCard
              key={index}
              comment={comment}
              deleteComment={deleteComment}
            />
          })
          : 'No Comments.'
      }
    </div>
  )
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentList
