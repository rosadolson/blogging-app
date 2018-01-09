import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import Input from './Components/Input'
import TextArea from './Components/TextArea'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    marginBottom: 20,
    padding: '5%'
  },
  formContainer: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30
  },
  header: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 60,
    marginBottom: 0
  },
  subHeader: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 12,
    marginTop: 0
  }
}

const CreatePostForm = ({ onChangeHandler, handleSubmit }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <p style={styles.header}>WRITE A POST</p>
        <p style={styles.subHeader}>FILL IN ALL THE BLANKS AND HIT SUBMIT</p>
      </div>
      <form style={styles.fromContainer}>
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
          rows={'15'}
          cols={'37'}
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
