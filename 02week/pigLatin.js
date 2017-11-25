'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  //making sure I made my branch correctly, attempt 2 https://github.com/deytonk/javascript-workbook/pull/5

  // WHITE BOARDING:
  // Find position of first vowel (a,e,i,o,u, or y)

  let pigWord = word.trim().toLowerCase().split('');

  // This regex string method is used to parse and iterate through the characters of the parameter of the pigLatin function, to see where the vowels are located.
  // const firstVowel = word.match(/[aeiouy]/);
  // const firstPosition = word.indexOf(firstVowel);

  const vowel = ['a', 'e', 'i', 'o', 'u'];
  // If vowel is the first letter of the word, return the word with 'ay' at the end, (unless Y is the first letter, then treat as other words)
  if (vowel.indexOf(pigWord[0]) > -1) {
    return pigWord.join('') + "yay";
  // For all other words, return any letters before the vowel to the end of the word with 'ay' at the end, moving the first vowel to position 0
  } else {
    for (let v = 1; v < pigWord.length; v++) {
      if (vowel.indexOf(pigWord[v]) > -1) {
        return pigWord.slice(v, pigWord.length).join('') + pigWord.slice(0, v).join('') + "ay";
      }
    }
    // pigWord.forEach(vowel.indexOf(pigWord[]))
    // return pigWord.splice(0, ) + "ay";
  }
}

// pigLatin('thrice');


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log(pigLatin(answer));
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
