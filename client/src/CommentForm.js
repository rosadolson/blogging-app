import React from 'react'
import PropTypes from 'prop-types'

const CommentForm = ({ username, icon, message, handleCommentSubmit, onChangeHandler }) => {
  return (
    <form>
      <div>
        <label>Enter Image URL (Icon):</label>
        <input id='icon' type='text' value={icon} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Enter Username:</label>
        <input id='username' type='text' value={username} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Type Comment:</label>
        <textarea id='message' type='text' value={message} onChange={onChangeHandler} rows='5' placeholder='Enter A Comment' />
      </div>
      <button onClick={handleCommentSubmit} type='button'>Comment</button>
    </form>
  )
}

CommentForm.propTypes = {
  username: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  handleCommentSubmit: PropTypes.func.isRequired
}

export default CommentForm
