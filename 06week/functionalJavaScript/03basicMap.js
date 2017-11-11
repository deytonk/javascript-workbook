// Convert the following code from a for-loop to Array#map:

// function doubleAll(numbers) {
//       var result = []
//       for (var i = 0; i < numbers.length; i++) {
//         result.push(numbers[i] * 2)
//       }
//       return result
//     }


const doubleAll = (numbers) => {
  let result = [];
  numbers.map(function(i) {
    result.push(i * 2);
  });

  return result;

}

module.exports = doubleAll
