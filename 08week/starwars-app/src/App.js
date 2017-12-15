import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    characters: null,
  }
  componentDidMount() {
    // const.that = this;
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
      .then((response) => response.json)
      .then(storyIds => {
        storyIds.slice(0, 15).forEach((storyId) => {
        fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json?print=pretty`)
        .then(res => res.json())
        .then(characters => {
          console.log(characters);
        })
      });
    });

  renderCharacters() {
    const { characters } = this.state; /*deconstruct this.state.characters*/
    if(characters && characters.length > 0) {
      return characters.map((obj, key) => {
        return <p key={key}>{obj.name}</p>
      })
    }
  }

  render() {
    return (
      <div>
        {this.renderCharacters()}
      </div>
    );
  }
}

export default App;
