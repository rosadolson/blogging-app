import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, placeHolder, id, type, value, handleChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input placeholder={placeHolder} id={id} type={type} value={value} onChange={handleChange} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}

export default Input
