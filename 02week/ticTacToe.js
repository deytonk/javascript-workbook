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
let win = false;

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// function horizontalWin() {
  // Your code here
  // in row, column format these combinations of matching x's or o's will return a win
  // 00 01 02
  // 10 11 12
  // 20 21 22
  // if (([0,0] === [0,1] === [0,2]) || ([1,0] === [1,1] === [1,2]) || ([2,0] === [2,1] === [2,2])) {
  //   return "Player ${} Wins!";
  // }

// }

// function verticalWin() {
  // Your code here
  // in row, column format these combinations of matching x's or o's will return a win
  // 00 10 20
  // 01 11 21
  // 02 12 22
  // if (([0,0] === [1,0] === [2,0]) || ([0,1] === [1,1] === [2,1]) || ([0,2] === [1,2] === [2,2])) {
  //   return "Player ${} Wins!";
  // }
// }

// function diagonalWin() {
  // Your code here
  // in row, column format these combinations of matching x's or o's will return a win
  // 00 11 22
  // 02 11 20
  // if (([0,0] === [1,1] === [2,2]) || ([0,2] === [1,1] === [2,0])) {
  //   return "Player ${} Wins!"
  // }
// }

winningCombinations = () => {
  [
    // horizontal wins
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    // verticals wins
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    // diagonal wins
    [0, 4, 8], [2, 4, 6]
  ];
}

function checkForWin(playerTurn) {
  // Your code here
  // if in any of the above combinations, there are either all x's or all o's then the respective player wins
  // on each click, if horizontalWin or verticalWin or diagonalWin - gameover and ${} player wins. If no win, then alternate player.
}

function ticTacToe(row, column) {
  // Your code here
  // the playerturn will start at x but will alternate between xs and os onclicks, and for each click it will checkForWin.
  // if win, game winner will be announced and board will reset.
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
