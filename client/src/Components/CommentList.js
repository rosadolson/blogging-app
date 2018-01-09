import React from 'react'
import PropTypes from 'prop-types'
import CommentCard from './CommentCard'

const styles = {
  container: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column'
  }
}

const CommentList = ({ comments, deleteComment }) => {
  return (
    <div style={styles.container}>
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
