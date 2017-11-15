// Implement Array#reduce using recursion.
//
// To test your reduction works correctly we will use your reduce implementation to execute our solution
// to the previous basic_reduce problem. i.e. your reduce function will be passed an array of words,
// and a function, and an initial value which will return an object containing the counts for each word found in the array.
// You don't need to implement this functionality, it will be supplied to your reduce implementation.
//
// For simplicity, your implementation of reduce need not replicate the behaviour of a reduce missing an initial value.
// You may assume the initial value will always be supplied.

const reduce = (arr, fn, initial) => {
  return (reduceArr = (item, value) => {
    if (item > arr.length - 1) {
    return value;
    }
    return reduceArr(item + 1, fn(value, arr[item],  item, arr));
  }) (0, initial);
};

// I got this solution from the intertnet so I could see the official solution and I was so close:
// function reduce(array, fn, init) {
//   var arrayDup = array.slice(), i = 0;
//
//   return (function recursiveReduce(arrayDup, fn, init) {
//     return arrayDup.length ? recursiveReduce(arrayDup, fn, fn(init, arrayDup.shift()), i++, array) : init;
//   }(arrayDup, fn, init));
// }
//
// official solution:
// function reduce(arr, fn, initial) {
//   return (function reduceOne(index, value) {
//     if (index > arr.length - 1) return value // end condition
//     return reduceOne(index + 1, fn(value, arr[index], index, arr)) // calculate & pass values to next step
//   })(0, initial) // IIFE. kick off recursion with initial values
// }


module.exports = reduce
