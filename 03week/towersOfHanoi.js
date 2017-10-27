'use strict';

// WHITEBOARDING:
// game - 3 columns / rows. Start with an array of 4 numbers in the first column / row.
// win - Move all 4 numbers into the last (or second) column / row:
// conditions -
//   You can only move one number at a time
//   You can only move the top number of any column / row
//   You can only stack numbers on top of larger numbers

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece() {
  // You can only move the top number of any row, and you can only move one number at a time.
  // const userObj = stack[].pop();
}

function isLegal() {
  // You can only move numbers to either empty rows, or on top of a larger numbers.
  // You can only move the numbers that are part of the game, in this case 1 - 4.

}

function checkForWin() {
  // You win the game if you have successfully moved all for numbers into either of the other two rows (in order).

}

function towersOfHanoi(startStack, endStack) {
  // access last child of each stack.

}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  // User can only move objects from stacks a b and c (returns an error message when a user inputs illegal moves)

  describe('#isLegal()', () => {
    it('should return error message when user inputs illegal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'd'), false);
    });
  });

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  // should be able to move a block on top of another block of greater value

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block on top of another block of greater value', () => {
      towersOfHanoi('b', 'c');
      assert.deepEqual(stacks, { a: [4, 3], b: [1], c: [2] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

  // Should also detect win if all of the numbers are in the c column

  describe('#checkForWin()', () => {
    it('should also detect a win if all of the numbers are in c column', () => {
      stacks = { a: [], b: [], c: [4, 3, 2, 1] };
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
