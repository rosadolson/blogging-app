import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'

const styles = {
  container: {
    marginTop: '8%',
    marginBottom: '10%'
  },
  posts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Playfair Display, serif',
    fontSize: 60,
    marginBottom: 0
  },
  subHeader: {
    display: 'flex',
    justifyContent: 'center',
    fontFamily: 'Muli, sans-serif',
    fontSize: 12,
    marginTop: 0
  }
}

const PostList = ({ posts, deletePost }) => {
  return (
    <div style={styles.container}>
      <p style={styles.header}>THE BLOG</p>
      <p style={styles.subHeader}>BLOGGING  |  TRAVEL | FOOD | EVENTS | PEOPLE | HEALTH | BEAUTY</p>
      <div style={styles.posts}>
        {
          posts.map((post, index) => {
            return <PostCard
              key={index}
              post={post}
              deletePost={deletePost}
            />
          })
        }
      </div>
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostList
