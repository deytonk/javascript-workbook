import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

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

class Game extends React.Component {
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

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//
//     }
//   };
//
//   render() {
//     return (
//       <div>
//         <h1>Tic Tac Toe</h1>
//         <div className="row">
//           <div data-cell="0"></div>
//           <div data-cell="1"></div>
//           <div data-cell="2"></div>
//         </div>
//         <div className="row">
//           <div data-cell="3"></div>
//           <div data-cell="4"></div>
//           <div data-cell="5"></div>
//         </div>
//         <div className="row">
//           <div data-cell="6"></div>
//           <div data-cell="7"></div>
//           <div data-cell="8"></div>
//         </div>
//       </div>
//     );
//   }
// }


// ReactDOM.render(
//   <Game />,
//   document.getElementById('root')
// );

export default Square && Board && Game;
