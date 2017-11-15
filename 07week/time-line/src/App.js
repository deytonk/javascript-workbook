import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    timelineData:[
      {name: 'renee', post: 'I love kitties', id: 1},
      {name: 'stevie', post: 'I love dogs', id: 2},
      {name: 'groot', post: 'I Am Groot', id: 3},
      {name: 'luke', post: 'blah blah blah', id: 4},
      {name: 'vader', post: 'I am your father', id: 5},
      {name: 'lea', post: 'Pizza', id: 6},
      {name: 'tamra', post: 'Workout', id: 7},
      {name: 'vicky', post: 'Coto Insurance', id: 8},
    ]
  }
  renderPosts = () => {
    return this.state.timelineData.map((item, key) => {
      return <p key={key}>{item}</p>
      console.log(item)
    })
    this.setState({})
  }
  render() {
    return (
      <div>
        <p>{this.renderPosts.post}</p> <p>{this.renderPosts.name}</p>
        <a>like</a>
      </div>
    );
  }
}

export default App;

// * Create a function called renderPosts -  using map, return an array of divs for every post object in this.timelineData. Every div should have this format
//     * <div> <p>{post}</p> <p>{user’s name}</p> <a>like</a></div>
// *  In the render function, call your renderPosts function
//     * You should now see all of the posts and their author’s
// * In your renderPosts function, attach an onClick callback to the <a> around the like, call a function called handleLikeClick, pass through the post obj
// * Create a handleLikeClick function, it should take a post obj as an argument
//     * create an empty obj called newState
//     * create a const called value set it equal to a ternary statement
//         * if this.state at obj.id is present than return this.state at obj.id + 1, else, return 1
//     * in newState, set the obj.id to equal to value
//     * set state with the newState object
// * Create a <p> that shows the amount of likes (in the renderPosts()) for that post``
