import React from 'react'
import PropTypes from 'prop-types'

const CreatePostForm = ({ onChangeHandler, handleSubmit }) => {
  return (
    <div>
      <form>
        <div>
          <label>Image: </label>
          <input id='img' type='text' placeholder='Enter Image URL Here' onChange={onChangeHandler} />
        </div>
        <div>
          <label>Title: </label>
          <input id='title' type='text' placeholder='Enter Title Here' onChange={onChangeHandler} />
        </div>
        <div>
          <label>Author: </label>
          <input id='author' type='text' placeholder='Enter Author Name Here' onChange={onChangeHandler} />
        </div>
        <div>
          <label>Message: </label>
          <input id='message' type='text' placeholder='Type Blog Post Here' onChange={onChangeHandler} />
        </div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </form>
    </div>
  )
}

CreatePostForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CreatePostForm
