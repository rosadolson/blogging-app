import React from 'react'
import PropTypes from 'prop-types'
import PostInfo from './Components/PostInfo'
import CommentList from './Components/CommentList'
import CommentForm from './Components/CommentForm'
import {Link} from 'react-router-dom'

const styles = {
  container: {
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    marginLeft: '15%',
    marginTop: '10%',
    marginBottom: '10%'
  },
  commentSection: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10%',
    borderTop: '1px solid black'
  },
  editPost: {
    zIndex: '2',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 250
  },
  link: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 11,
    color: 'black'
  },
  header: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 60,
    marginBottom: 0,
    marginTop: 30
  },
  subHeader: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 12,
    marginTop: 0,
    marginBottom: 30
  }
}

const ViewPostCard = ({ post, comments, username,
  icon, message, onChangeHandler, handleCommentSubmit, deleteComment }) => {
  return (
    <div style={styles.container}>
      <PostInfo post={post} message={post.message} />
      <div style={styles.editPost}>
        <Link style={styles.link} to={`/edit-post/${post._id}`}>EDIT POST</Link>
      </div>
      <div style={styles.commentSection}>
        <p style={styles.header}>COMMENTS</p>
        <p style={styles.subHeader}>LEAVE A COMMENT HERE</p>
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
