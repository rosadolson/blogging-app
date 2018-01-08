import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'

const styles = {
  container: {
    marginTop: '8%',
    marginBottom: '10%'
  }
}

const PostList = ({ posts, deletePost }) => {
  return (
    <div style={styles.container}>
      <h1>Welcome to the Blog!</h1>
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
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
  deletePost: PropTypes.func.isRequired
}

export default PostList
