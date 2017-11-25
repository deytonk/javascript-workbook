'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function rockPaperScissors(a, b) {

  // trim and convert characters to lowercase
  const hand1 = a.trim().toLowerCase();
  const hand2 = b.trim().toLowerCase();

  // make sure players write the right words
  // if ((hand1 !== "rock") && (hand1 !== "scissors") && (hand1 !== "paper")) {
  //   return "There was a typo, please try again!";
  // }
  //
  // if ((hand2 !== "rock") && (hand1 !== "scissors") && (hand1 !== "paper")) {
  //   return "There was a typo, please try again!";
  // }

  const typo = ['rock', 'paper', 'scissors'];
  if(typo.indexOf(hand1) > -1 && typo.indexOf(hand2) > -1) {
  // check for tie, if a tie does not return - check for a win
    if (hand1 === hand2) {
      return "It's a tie!";
    } else {
      // write out all of the hand1 winning combinations
      if ((hand1 === 'rock' && hand2 === 'scissors') || (hand1 === 'scissors' && hand2 === 'paper') || (hand1 === 'paper' && hand2 === 'rock')) {
        return "Hand one wins!";

      // if hand1 does not win then hand2 wins
    } else if ((hand1 === 'rock' && hand2 === 'paper') || (hand1 === 'scissors' && hand2 === 'rock') || (hand1 === 'paper' && hand2 === 'scissors')) {
        return "Hand two wins!";
      }
    }
  } else {
    return "There was a typo, please try again!";
  }
}

function getPrompt() {
  rl.question('Player 1: ', (answer1) => {
    rl.question('Player 2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should detect when hand 1 wins', () => {
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
      assert.equal(rockPaperScissors('paper', 'rock'), "Hand one wins!");
      assert.equal(rockPaperScissors('scissors', 'paper'), "Hand one wins!");
    });
    it('should detect when hand 2 wins', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('scissors', 'rock'), "Hand two wins!");
    });
    it('should detect a typo', () => {
      assert.equal(rockPaperScissors('sizzors', 'paper'), "There was a typo, please try again!");
      assert.equal(rockPaperScissors('rock', 'pepar'), "There was a typo, please try again!");
      assert.equal(rockPaperScissors('rokk', 'pepar'), "There was a typo, please try again!");
    });
  });
} else {

  getPrompt();

}
