import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TowersButton from './TowersButton';

class App extends Component {
  component(props) {
  super (props)
  this.state = {
    stacks: {
      a: [4, 3, 2, 1],
      b: [],
      c: []
    },
    stackColorObj: {
      4: 'red',
      3: 'orange',
      2: 'yellow',
      1: 'green'
    },
    startStack: null,
    // endStack:
  }

  isLegalMove(endStack) {
    const endValue = this.state.stacks[endStack][this.state.stacks[endStack].length]
    const startValue = this.state.stacks[this.state.startStack][this.state.st]
    if(!endValue) {
      return true
    } else if () {
    }
  }

  handleStackClick(stack) {
    console.log(startStack);
    if(!this.state.startStack) {
      this.setState({startStack}) /* = startStack: startStack*/
    } else if (endValue > startValue) {
      return
    }
  }

  renderStacks() {
    //for every key, render numbers in array value
    return Object.keys(this.state.stacks).map((stack) => {
      <div>
        <div style = {{display: 'flex', width: 60, height: 300, alignItems: 'flex-end'}}
        key={key}
        onClick = {() => this.handleStackClick(stack)}
        >
        <div style = {{display: 'flex', flexDirection: 'column-reverse'}}>
          {this.state.stacks[stack].map((disc, i) => <p key={i}>{disc}</p>)}
        </div>
        {stack}
        </div>
      </div>
    })
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
