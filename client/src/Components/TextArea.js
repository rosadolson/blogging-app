import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  input: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 10,
    padding: 8,
    margin: 5,
    border: 'none'
  }
}

const Input = ({ placeHolder, id, type, value, handleChange, rows, cols }) => {
  return (
    <div>
      <textarea style={styles.input} placeholder={placeHolder} id={id} type={type} value={value} onChange={handleChange} rows={rows} cols={cols} />
    </div>
  )
}

Input.propTypes = {
  placeHolder: PropTypes.string,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  rows: PropTypes.string.isRequired,
  cols: PropTypes.string.isRequired
}

export default Input
