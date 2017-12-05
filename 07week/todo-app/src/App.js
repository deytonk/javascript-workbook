https://github.com/deytonk/javascript-workbook/pull/16

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     count: 5
  //   };
  // };
  state = {
    list: [],
    inputValue: '',
    name: 'Deyton'
  }
  handleClick = () => {
    const count = this.state.count;
    this.setState({count: this.state.count ++})
  }
  handleInputChange = (e) => {
    this.setState({inputValue: e.target.value})
  }
  handleItemSubmit = () => {
    const newList = this.state.list;
    newList.push(this.state.inputValue);
    this.setState({list: newList})
    // this.setState({list: [...this.state.list]})
  }
  renderList(){
    return this.state.list.map((item, key) => {
      return <p key={key}>{item}</p>
    })
  }
  render() {
    return (
      <div>
        <h3>To Do List</h3>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleItemSubmit}>Submit</button>
        /* <ol>
          <li>Walk the dog</li>
          <li>Landry</li>
          <li>Wash the Car</li>
        </ol> */
        {this.renderList()}
      </div>
      /* <div>
        <h2>Click Count<h2>
        <a onClick = {() => this.handleClick()}>click me</a>
      </div> */
    );
  }
}

export default App;
