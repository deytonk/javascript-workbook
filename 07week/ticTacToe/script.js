import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class TicTacToe extends React.Component {
  // Keep track of player turn, default is 'X'
  // on click and if div is empty, then place player turn, check for win,
  // if no win, switch player turn
  state = {
    playerTurn: 'X',
    grid: {},
    board: [
      [0,1,2],
      [3,4,5],
      [6,7,8]
    ]
  }

  clickHandler(box) {
    if (!this.state[box]) {
      const newGrid = {...this.state.grid};
      newGrid[box] = this.state.playerTurn;
      const playerTurn = this.state.playerTurn === 'X' ? 'O' : 'X';
      this.setState({grid: newGrid, playerTurn})
    }
  }

  checkForWin() {

  }

  renderBoard() {
    return this.state.board.map((row, key) =>{
      return (
        <div className="row">
          {row.map(num, index) => {
            <div key={index} className="square" onClick = {() => this.clickHandler(num)}>{this.state.grid[num]}</div>
          })}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        {this.renderBoard()}
      </div>
      // <div>
      //   <div className="row">
      //     <div className="square" onClick = {() => this.clickHandler(0)}>{this.state.grid[0]}</div>
      //     <div className="square" onClick = {() => this.clickHandler(1)}>{this.state.grid[1]}</div>
      //     <div className="square" onClick = {() => this.clickHandler(2)}>{this.state.grid[2]}</div>
      //   </div>
      //   <div className="row">
      //     <div className="square" onClick = {() => this.clickHandler(3)}>{this.state.grid[3]}</div>
      //     <div className="square" onClick = {() => this.clickHandler(4)}>{this.state.grid[4]}</div>
      //     <div className="square" onClick = {() => this.clickHandler(5)}>{this.state.grid[5]}</div>
      //   </div>
      //   <div className="row">
      //     <div className="square" onClick = {() => this.clickHandler(6)}>{this.state.grid[6]}</div>
      //     <div className="square" onClick = {() => this.clickHandler(7)}>{this.state.grid[7]}</div>
      //     <div className="square" onClick = {() => this.clickHandler(8)}>{this.state.grid[8]}</div>
      //   </div>
      // </div>
    );
  }
}

export default TicTacToe;
