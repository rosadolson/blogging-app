import React from 'react'
import PropTypes from 'prop-types'
import Button from './Components/Button'
import PostInfo from './Components/PostInfo'
import {Link} from 'react-router-dom'

const styles = {
  container: {
    margin: '3%',
    width: '43%'
  },
  bottomSection: {
    backgroundColor: 'white',
    marginRight: '4.5%',
    marginLeft: '4.5%',
    paddingTop: '15%',
    paddingLeft: '6%',
    paddingBottom: '4%',
    paddingRight: '6%',
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid black'
  },
  readLink: {
    fontFamily: 'Muli, sans-serif',
    fontSize: 11,
    color: 'black',
    zIndex: '2'
  },
  button: {
    zIndex: '2'
  }
}

const PostCard = ({ post, deletePost }) => {
  return (
    <div style={styles.container}>
      <PostInfo post={post} />
      <div style={styles.bottomSection}>
        <Link style={styles.readLink} to={`/post/${post._id}`}>READ POST</Link>
        <Button style={styles.button} handleClick={() => deletePost(post)}>DELETE</Button>
      </div>
    </div>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostCard
