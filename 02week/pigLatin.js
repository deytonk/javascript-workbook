'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {

  // Your code here - making sure I made my branch correctly, attempt 2 https://github.com/deytonk/javascript-workbook/pull/5

  // WHITE BOARDING:
  // Find position of first vowel (a,e,i,o,u, or y)

  word = word.trim().toLowerCase();
  // look up regex expressions .match(string)
  const firstVowel = word.match(/[aeiouy]/);
  const firstPosition = word.indexOf(firstVowel);

  // If vowel is the first letter of the word, return the word with 'ay' at the end, unless Y is the first letter, then treat as other words
  if (firstPosition > -1) {
    // For all other words, return any letters before the vowel to the end of the word with 'ay' at the end, moving the first vowel to position 0
    return word.slice(firstPosition) + word.slice(0, firstPosition) + "ay";
  }
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
