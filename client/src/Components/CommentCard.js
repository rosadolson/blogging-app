import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const styles = {
  container: {
    display: 'flex',
    margin: 20
  },
  textSection: {
    paddingLeft: 20,
    width: '100%',
    borderLeft: '1px solid black'
  },
  img: {
    width: '20%',
    height: '20%',
    paddingRight: 20,
    marginTop: 0
  },
  name: {
    fontFamily: 'Playfair Display, serif',
    fontSize: 20,
    marginBottom: 5,
    marginTop: 2
  },
  message: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 11,
    marginTop: 5,
    marginBottom: 10
  },
  button: {
    marginBottom: 2
  }
}

const CommentCard = ({ comment, deleteComment }) => {
  return (
    <div style={styles.container}>
      <img style={styles.img} alt='' src={comment.icon} />
      <div style={styles.textSection}>
        <p style={styles.name}>{comment.username}</p>
        <p style={styles.message}>{comment.message}</p>
        <Button style={styles.button} handleClick={() => deleteComment(comment._id)}>DELETE</Button>
      </div>
    </div>
  )
}

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
}

export default CommentCard
