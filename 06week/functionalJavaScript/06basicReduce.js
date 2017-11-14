'use strict';

// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array.
// Return the object directly (no need to console.log).

// Counting instances of values in an object

const countWords = (inputWords) => {
  let countedWords = inputWords.reduce((acc, words) => {
    if (words in acc) {
      // acc[words] = 0;
      acc[words]++;
    } else {
      acc[words] = 1;
    }
    return acc;
  }, {});

  return countedWords;
}

module.exports = countWords
