import React from 'react'
import {
  Link
} from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to='/'> Home </Link>
        <Link to='/posts'> Blog </Link>
      </nav>
    </div>
  )
}

export default NavBar
