// Implement a function that takes a function as its first argument, a number num as its second argument,
// then executes the passed in function num times.

const repeat = (operation, num) => {
  // if (num === 0) {
  //   return true;
  // }
  // operation();
  // return repeat(operation, num - 1);
  for (i = 0; i < num; i++) {
    operation();
  }
}

module.exports = repeat
