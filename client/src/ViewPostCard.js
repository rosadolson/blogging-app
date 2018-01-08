import React from 'react'
import PropTypes from 'prop-types'
import PostInfo from './Components/PostInfo'
import CommentList from './Components/CommentList'
import CommentForm from './Components/CommentForm'
import {Link} from 'react-router-dom'

const ViewPostCard = ({ post, comments, username, icon, message, onChangeHandler, handleCommentSubmit, deleteComment }) => {
  return (
    <div>
      <PostInfo post={post} message={post.message} />
      <Link to={`/edit-post/${post._id}`}>Edit Post</Link>
      <div>
        <h2>Comments:</h2>
        <CommentList
          comments={comments}
          deleteComment={deleteComment}
        />
        <CommentForm
          username={username}
          icon={icon}
          message={message}
          handleCommentSubmit={handleCommentSubmit}
          onChangeHandler={onChangeHandler}
        />
      </div>
    </div>
  )
}

ViewPostCard.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array.isRequired,
  username: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  deleteComment: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  handleCommentSubmit: PropTypes.func.isRequired
}

export default ViewPostCard
