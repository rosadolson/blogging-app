import React, {Component} from 'react'
import NavBar from './NavBar'
import Home from './Home'
import PostList from './PostList'
import ViewPostContainer from './ViewPostContainer'
import $ from 'jquery'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {
  state = {
    posts: undefined
  }

  componentDidMount () {
    this.loadPostsFromServer()
  }

  loadPostsFromServer = () => {
    $.ajax({
      url: '/api/posts',
      method: 'GET'
    }).done((response) => {
      // console.log('It Works!', response)
      this.setState({ posts: response.data })
    })
  }

  deletePost = (post) => {
    $.ajax({
      url: `/api/posts/${post._id}`,
      method: 'DELETE'
    }).done((response) => {
      this.loadPostsFromServer()
    })
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          {
            this.state.posts
              ? <Route path='/posts' render={() => <PostList posts={this.state.posts} deletePost={this.deletePost} />} />
              : 'There are no blog posts yet.'
          }
          <Route exact path='/posts/:postId' render={() => <ViewPostContainer />} />
        </div>
      </Router>
    )
  }
}

export default App
