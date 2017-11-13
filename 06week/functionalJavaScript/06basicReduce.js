'use strict';

// Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array.
// Return the object directly (no need to console.log).

const countWords = (inputWords) => {
  // let obj = {};
  inputWords.reduce((acc, i) => {
    if (!acc[i]) {
    acc[i] = 0;
    acc[i]++;
    return acc;
  } , {}});
}

module.exports = countWords
