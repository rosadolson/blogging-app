import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
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
