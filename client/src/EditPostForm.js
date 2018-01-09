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

const EditPostForm = ({ img, title, author, message, onChangeHandler, submitPostToServer }) => {
  return (
    <div style={styles.container}>
      <div style={styles.textContainer}>
        <p style={styles.header}>EDIT POST</p>
        <p style={styles.subHeader}>CHANGE ANYTHING YOU WANT TO HERE</p>
      </div>
      <form style={styles.fromContainer}>
        <Input
          id={'title'}
          type={'text'}
          value={title}
          handleChange={onChangeHandler}
        />
        <Input
          id={'img'}
          type={'text'}
          value={img}
          handleChange={onChangeHandler}
        />
        <Input
          id={'author'}
          type={'text'}
          value={author}
          handleChange={onChangeHandler}
        />
        <TextArea
          id={'message'}
          type={'text'}
          value={message}
          handleChange={onChangeHandler}
          rows={'15'}
          cols={'37'}
        />
        <Button handleClick={submitPostToServer}>SUBMIT</Button>
      </form>
    </div>
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
