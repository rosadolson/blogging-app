import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import CommentList from './CommentList'
import CommentForm from './CommentForm'

const ViewPostCard = ({ post, comments, username, icon, message, onChangeHandler, handleCommentSubmit, deleteComment }) => {
  return (
    <div>
      <img alt='' src={post.img} />
      <p>{post.title}</p>
      <p>{post.author}</p>
      <p>{post.message}</p>
      <Link to={`/edit-post/${post._id}`}>Edit Post</Link>
      <div>
        <h2>Comments:</h2>
        <CommentList comments={comments} />
        <CommentForm
          username={username}
          icon={icon}
          message={message}
          deleteComment={deleteComment}
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
