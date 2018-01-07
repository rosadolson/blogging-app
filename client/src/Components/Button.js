import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ handleClick, children }) => {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired
}

export default Button
