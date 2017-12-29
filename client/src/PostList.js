import React from 'react'
import PropTypes from 'prop-types'
import PostCard from './PostCard'

const PostList = ({ posts }) => {
  return (
    <div>
      <h1>Welcome to the Blog!</h1>
      {
        posts.map((post, index) => {
          return <PostCard key={index} post={post} />
        })
      }
    </div>
  )
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList
