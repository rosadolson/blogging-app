import React from 'react'
import PropTypes from 'prop-types'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative'
  },
  img: {
    width: '100%',
    zIndex: '-1'
  },
  textSection: {
    backgroundColor: 'white',
    width: '85%',
    position: 'absolute',
    top: '85%',
    paddingTop: '2%',
    paddingLeft: '5%',
    paddingBottom: '8%',
    paddingRight: '5%'
  },
  header: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 25,
    marginBottom: '2%',
    marginTop: 0
  },
  text: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 11,
    marginTop: 0,
    paddingLeft: '1%'
  }
}

const PostInfo = ({ post, message }) => {
  return (
    <div style={styles.container}>
      <img style={styles.img} alt='' src={post.img} />
      <div style={styles.textSection}>
        <p style={styles.header}>{post.title}</p>
        <p style={styles.text}>By: {post.author}</p>
        <p style={styles.text}>{message}</p>
      </div>
    </div>
  )
}

PostInfo.propTypes = {
  post: PropTypes.object.isRequired,
  message: PropTypes.string
}

export default PostInfo
