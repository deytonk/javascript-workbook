import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    character: null,
  }
  componentDidMount() {
    const.that = this;
    fetch('')
      .then((response) => response.json)
      .then((responseJson) => ) 
  }
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars</h1>
        </header>
        {this.renderCharacters()}
      </div>
    );
  }
}

export default App;
