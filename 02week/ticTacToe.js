'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';
if ()
let win = false;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Your code here
  // in row, column format these combinations of matching x's or o's will return a win
  // 00 01 02
  // 10 11 12
  // 20 21 22
  if ((board[0][0] === board[0][1] && board[0][1] === board[0][2]) || (board[1][0] === board[1][1] && board[1][1] === board[1][2]) || (board[2][0] === board[2][1]
    && board[2][1] === board[2][2])) {
    return true;
  }
}

function verticalWin() {
  // Your code here
  // in row, column format these combinations of matching x's or o's will return a win
  // 00 10 20
  // 01 11 21
  // 02 12 22
  if ((board[0][0] === board[1][0] && board[1][0] === board[2][0]) || (board[0][1] === board[1][1] && board[1][1] === board[2][1]) || (board[0][2] === board[1][2]
    && board[1][2] === board[2][2])) {
    return true;
  }
}

function diagonalWin() {
  // Your code here
  // in row, column format these combinations of matching x's or o's will return a win
  // 00 11 22
  // 02 11 20
  if ((board[0][0] === board[1][1] && board[1][1] === board[2][2]) || (board[0][2] === board[1][1] && board[1][1] === board[2][0])) {
    return true;
  }
}

// const winningCombinations = horizontalWin() || verticalWin() || diagonalWin();

// winningCombinations = (row, column) => {
//   [
//     // horizontal wins
//     [[0,0], [0,1], [0,2]], [[1,0], [1,1], [1,2]], [[2,0], [2,1], [2,2]],
//     // verticals wins
//     [[0,0], [1,0], [2,0]], [[0,1], [1,1], [2,1]], [[0,2], [1,2], [2,2]],
//     // diagonal wins
//     [[0,0], [1,1], [2,2]], [[0,2], [1,1], [2,0]];
//   ];
// }

function checkForWin(playerTurn) {
  // Your code here
  // if in any of the above combinations, there are either all x's or all o's then the respective player wins
  // on each click, if horizontalWin or verticalWin or diagonalWin - gameover and ${} player wins. If no win, then alternate player.

  // for (var i = 0; i < winningCombinations.length; i++) {
  //   let i, j
  //   let count = 0;
  //   for (let j = 0; j < winningCombinations[i].length; j++) {
  //   if (board[winningCombinations[i][j]] === playerTurn) {
  //       count++;
  //   }if (count === 3) {
  //       return true;
  //   }
  // }
  // return false;
  // }

  if (horizontalWin() || verticalWin() || diagonalWin()) {
    console.log(`Player ${playerTurn} Wins!`);
  }
}

function ticTacToe(row, column) {
  // Your code here
  // the playerturn will start at x but will alternate between xs and os onclicks, and for each click it will checkForWin.
    // if win, game winner will be announced and board will reset.
  // call printBoard after every turn (push playerTurn to array)
  // if (playerTurn === 'X') {
  //   playTurn('O');
  // } else {
  //   playTurn('X');
// }

}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
