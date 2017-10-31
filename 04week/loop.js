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

// 2. How is the readability of the code affected?
// 3. What is the difference between a for loop and a for...in loop?
// 4. What is the difference between a while loop and a do...while loop?
