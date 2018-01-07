import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import Input from './Components/Input'
import TextArea from './Components/TextArea'

const CommentForm = ({ username, icon, message, handleCommentSubmit, onChangeHandler }) => {
  return (
    <form>
      <Input
        label={'Enter Image URL (Icon):'}
        placeHolder={'Icon URL'}
        id={'icon'}
        type={'text'}
        value={icon}
        handleChange={onChangeHandler}
      />
      <Input
        label={'Enter Username:'}
        placeHolder={'Username'}
        id={'username'}
        type={'text'}
        value={username}
        handleChange={onChangeHandler}
      />
      <TextArea
        label={'Enter A Comment:'}
        placeHolder={'Type Comment Here'}
        id={'message'}
        type={'text'}
        value={message}
        handleChange={onChangeHandler}
        rows={'5'}
        cols={'40'}
      />
      <Button handleClick={handleCommentSubmit} type='button'>COMMENT</Button>
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
