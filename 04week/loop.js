'use strict';

// for loop:
// 1. Use a for loop to console.log each item in the array carsInReverse.
// for...in loop:
// 2. Create an object (an array with keys and values) called persons with the following data:
// firstName: "Jane"
// lastName: "Doe"
// birthDate: "Jan 5, 1925"
// gender: "female"
// 3. Use a for...in loop to console.log each key.
// 4. Then use a for...in loop and if state to console.log the value associated with the key birthDate.
// while loop:
// 5. Use a for loop to console.log the numbers 1 to 1000.
// do...while loop:
// 6. Use a do...while loop to console.log the numbers from 1 to 1000.


// 1.
const carsInReverse = ["mercedes", "bmw", "corvette", "ferrari"];

for (i = 0; i < carsInReverse.length; i++) {
  console.log(carsInReverse[i]);
}

// 2.
const persons = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
};

// 3.
for (const keys in persons) {
  console.log(Object.keys(persons));
}

// 4.
for (const keys in persons) {
  if (keys === 'birthDate') {
    console.log(persons[keys]);
  }
}

// 5
let num = 1;
while(num <= 1000) {
  console.log(num);
  num++;
}

// 6
let num = 1;
do {
  console.log(num);
  num++;
}
while(num <= 1000);

// 1. When is a for loop better than a while loop?
  // A for loop is better than a while loop when you know how many iterations there will be.
// 2. How is the readability of the code affected
  The conditions in a for loop are clearly defined in the statement where as the while loop has less required conditions and therefor is easier to read and understand standalone, but is also more prone to errors.
// 3. What is the difference between a for loop and a for...in loop?
  // A for...in loop is a for loop specified to iterate over the enumerable properties of an object.
// 4. What is the difference between a while loop and a do...while loop?
  // A do...while loop will repeat until a specific condition evaluates to false (which is defined after the statement) and a while loop will repeat as long as the condition (defined in the statement) evaluates to true.
