import React from 'react'
import {
  FaPinterestP,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutubePlay
} from 'react-icons/lib/fa'

const styles = {
  container: {
    position: 'fixed',
    bottom: 0,
    width: '101%',
    marginLeft: -10,
    marginRight: -10,
    backgroundColor: 'black'
  },
  content: {
    marginBottom: 10,
    color: 'white'
  },
  copyright: {
    fontFamily: 'Muli, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    fontSize: 8
  },
  social: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: '1%',
    fontSize: 12
  }
}

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.social}>
          <FaYoutubePlay />
          <FaPinterestP />
          <FaTwitter />
          <FaFacebook />
          <FaInstagram />
        </div>
        <div style={styles.copyright}>
          <p>© 2018 Blogger App</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
