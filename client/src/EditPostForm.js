import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import Input from './Components/Input'
import TextArea from './Components/TextArea'

const EditPostForm = ({ img, title, author, message, onChangeHandler, submitPostToServer }) => {
  return (
    <form>
      <Input
        label={'Enter Image URL Here:'}
        id={'img'}
        type={'text'}
        value={img}
        handleChange={onChangeHandler}
      />
      <Input
        label={'Enter Title Here:'}
        id={'title'}
        type={'text'}
        value={title}
        handleChange={onChangeHandler}
      />
      <Input
        label={"Enter Author's Name Here:"}
        id={'author'}
        type={'text'}
        value={author}
        handleChange={onChangeHandler}
      />
      <TextArea
        label={'Type Blog Post Here:'}
        id={'message'}
        type={'text'}
        value={message}
        handleChange={onChangeHandler}
        rows={'5'}
        cols={'40'}
      />
      <Button handleClick={submitPostToServer}>SUBMIT</Button>
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
