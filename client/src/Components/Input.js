import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  input: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 10,
    padding: 8,
    margin: 5,
    width: 200,
    border: 'none'
  }
}

const Input = ({ placeHolder, id, type, value, handleChange }) => {
  return (
    <div>
      <input style={styles.input} placeholder={placeHolder} id={id} type={type} value={value} onChange={handleChange} />
    </div>
  )
}

Input.propTypes = {
  placeHolder: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default Input
