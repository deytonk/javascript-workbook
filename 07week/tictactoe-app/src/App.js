import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


// The Square class makes each square on the Board class a button that alternates between placing X's and O's on the board when clicked
// class Square extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     value: null,
  //   };
  // }

  // (Sqare class is considered a 'contolled component' because it no longer keeps its own state)

  /*state = {
   new way to write that ^
  }*/

//   render() {
//     return (
//       <button className="square" onClick = {() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

// The tutorial took the Square class ^ and just made it a function:
const Square = (props) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

// The Board class renders the board game on the page
class Board extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      nextPlayer: true,
      moveCount: 0,
    };
  }

  /*state = {
    new way to write that ^
  }*/

  handleClick(i) {
    // (slice to copy the squares array instead of mutating the existing array IMMUTABILITY* (shouldComponentUpdate()))
    const squares = this.state.squares.slice();
    if (checkForWin(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.nextPlayer ? 'X' : 'O';
    this.setState.moveCount++;
    this.setState({
      squares: squares,
      // moveCount: this.state.moveCount++,
      nextPlayer: !this.state.nextPlayer,
    });
  }

  renderSquare(i) {
    // set up a click even listener that calls the onclick event handler in the Square class
    return (
      <Square
        value = {this.state.squares[i]}
        onClick = {() => this.handleClick(i)}
      />
    );
  }

  render() {
    console.log(this.state.moveCount);
    const winner = checkForWin(this.state.squares);
    const tie = (this.state.moveCount === 9);
    let status;
    if (tie) {
      status = 'It is a tie!';
    } else if (winner) {
      status = winner + ' is the winner!';
    } else {
      status = 'Next player: ' + (this.state.nextPlayer ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

// The Game class will dictate the flow of the game: check for win / announce winner and alternate player turns
class Game extends React.Component {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //
  //   };
  // }

  /*state = {
    new way to write that ^
  }*/

  render() {

    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}


  // Either figure how the f this shit works or rewrite it in a way that I understand
  const checkForWin = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


export default Square && Board && Game;
