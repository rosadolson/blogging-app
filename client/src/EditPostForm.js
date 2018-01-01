import React from 'react'
import PropTypes from 'prop-types'

const EditPostForm = ({ img, title, author, message, onChangeHandler, submitPostToServer }) => {
  return (
    <form>
      <div>
        <label>Image:</label>
        <input id='img' type='text' value={img} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Title:</label>
        <input id='title' type='text' value={title} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Author:</label>
        <input id='author' type='text' value={author} onChange={onChangeHandler} />
      </div>
      <div>
        <label>Message:</label>
        <input id='message' type='text' value={message} onChange={onChangeHandler} />
      </div>
      <button onClick={submitPostToServer}>SUBMIT</button>
    </form>
  )
}

EditPostForm.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  submitPostToServer: PropTypes.func.isRequired
}

export default EditPostForm
