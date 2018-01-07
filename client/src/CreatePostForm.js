import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import Input from './Components/Input'
import TextArea from './Components/TextArea'

const CreatePostForm = ({ onChangeHandler, handleSubmit }) => {
  return (
    <div>
      <form>
        <Input
          label={'Enter Image URL Here:'}
          placeHolder={'Image URL'}
          id={'img'}
          type={'text'}
          handleChange={onChangeHandler}
        />
        <Input
          label={'Enter Title Here:'}
          placeHolder={'Title'}
          id={'title'}
          type={'text'}
          handleChange={onChangeHandler}
        />
        <Input
          label={"Enter Author's Name Here:"}
          placeHolder={'Author'}
          id={'author'}
          type={'text'}
          handleChange={onChangeHandler}
        />
        <TextArea
          label={'Blog Post:'}
          placeHolder={'Type Message / Blog Post Here'}
          id={'message'}
          type={'text'}
          handleChange={onChangeHandler}
          rows={'5'}
          cols={'40'}
        />
        <Button handleClick={handleSubmit}>SUBMIT</Button>
      </form>
    </div>
  )
}

CreatePostForm.propTypes = {
  onChangeHandler: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default CreatePostForm
