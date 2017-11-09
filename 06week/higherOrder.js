'use strict';

const arr = ['', '', '', '', '', '']

// Create a forEach() function that takes an array of items and a function that runs the function arr.length number of times.
arr.forEach((item, index, arr) => {

});

// Create a map() function that takes an array of items and a function that returns an array with each item manipulated by that function.
arr.map((item, index, arr) => {

});

// Create a filter() function that takes an array of items and a function that returns an array with only the items that return true in the function.
arr.filter((item, index, arr) => {

});





// Create a map() function that takes an array of items and a function that returns an array with each item manipulated by that function.

const test = [1, 2, 3, 4, 5, 6];

const doThis = (arr, callbackFunc) => {
  const newArr = [];
  arr.forEach((i) => {
    newArr.push(callbackFunc(i));
  });
  return newArr;
};

doThis(test, (num) => num + 1);

const test2 = test.map((num, index) => {
  return num + 1;
});

console.log(test2);

console.log(test.map((num, index) => num + 1));

// Create an object and store it to a variable called userObject. It must have at least 8 key/value pairs.

const userObject = {
  name: 'Deyton',
  middleName: 'A',
  lastName: 'Koch',
  age: 27,
  eyeColor: 'Blue',
  hairColor: 'Brown',
  greeting: 'Hello!',
  favoriteMovie: 'Wizard of Oz',
};

// 3. Create an array from all of the keys in userObject. Store the array in a variable called userKeyArray.

const userKeyArray = Object.keys(userObject);
console.log(userKeyArray);

// Create an array of all of the values in userObject using userKeyArray and your map() function, store it in a variable called userValueArray.

// const userValueArray = Object.values(userObject);
// console.log(userValueArray);

const userValueArray = [];

doThis(userValleyArray, (userKeyArray) => userKeyArray.values(userObject));
