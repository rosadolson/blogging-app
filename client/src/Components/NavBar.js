import React from 'react'
import {
  Link
} from 'react-router-dom'

const styles = {
  container: {
    backgroundColor: 'black',
    position: 'fixed',
    top: 0,
    width: '101%',
    marginLeft: -10,
    marginRight: -10,
    paddingBottom: '1%'
  },
  link: {
    fontFamily: 'Muli, sans-serif',
    color: 'white',
    fontSize: '11px',
    textDecoration: 'none',
    paddingLeft: '1.5%',
    paddingRight: '1.5%'
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 15
  }
}

const NavBar = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <span style={styles.link}> ● </span>
        <Link style={styles.link} to='/'> H O M E </Link>
        <Link style={styles.link} to='/posts'> B L O G </Link>
        <Link style={styles.link} to='/create-post'> P O S T </Link>
        <span style={styles.link}> ● </span>
      </nav>
    </div>
  )
}

export default NavBar
