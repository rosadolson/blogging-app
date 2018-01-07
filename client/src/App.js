import React, {Component} from 'react'
import NavBar from './Components/NavBar'
import Home from './Home'
import PostList from './PostList'
import ViewPostContainer from './ViewPostContainer'
import CreatePostContainer from './CreatePostContainer'
import EditPostContainer from './EditPostContainer'
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
          <Route exact path='/post/:postId' render={() => <ViewPostContainer deletePost={this.deletePost} />} />
          {
            this.state.posts
              ? <Route path='/posts' render={() => <PostList posts={this.state.posts} deletePost={this.deletePost} />} />
              : 'No Posts Available'
          }
          {
            this.state.posts
              ? <Route path='/create-post' render={() => <CreatePostContainer posts={this.state.posts} loadPostsFromServer={this.loadPostsFromServer} />} />
              : 'No Posts Available'
          }
          {
            this.state.posts
              ? <Route path='/edit-post/:postId' render={() => <EditPostContainer posts={this.state.posts} />} />
              : 'No Posts Available'
          }
        </div>
      </Router>
    )
  }
}

export default App
