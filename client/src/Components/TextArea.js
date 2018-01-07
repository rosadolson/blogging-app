import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ label, placeHolder, id, type, value, handleChange, rows, cols }) => {
  return (
    <div>
      <label>{label}</label>
      <textarea placeholder={placeHolder} id={id} type={type} value={value} onChange={handleChange} rows={rows} cols={cols} />
    </div>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired
}

export default Input
