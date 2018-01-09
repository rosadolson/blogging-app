import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import Input from './Input'
import TextArea from './TextArea'

const styles = {
  form: {
    backgroundColor: '#ecf0f1',
    margin: 5,
    width: '100%',
    padding: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  inputContainer: {
    display: 'flex'
  }
}

const CommentForm = ({ username, icon, message, handleCommentSubmit, onChangeHandler }) => {
  return (
    <form style={styles.form}>
      <div style={styles.inputContainer}>
        <Input
          placeHolder={'NAME'}
          id={'username'}
          type={'text'}
          value={username}
          handleChange={onChangeHandler}
        />
        <Input
          placeHolder={'ICON URL'}
          id={'icon'}
          type={'text'}
          value={icon}
          handleChange={onChangeHandler}
        />
      </div>
      <TextArea
        placeHolder={'What did you think?'}
        id={'message'}
        type={'text'}
        value={message}
        handleChange={onChangeHandler}
        rows={'2'}
        cols={'82'}
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
