"use strict";
// Use repl.it to write the following code. Paste your code into your workbook in the file called datatypes.js.
//
// Write a JavaScript program to display the current day and time.
// Write a JavaScript program to convert a number to a string.
// Write a JavaScript program to convert a string to the number.
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// -Boolean
// -Null
// -Undefined
// -Number
// -NaN
// -String
// Write a JavaScript program that adds 2 numbers together.
// Write a JavaScript program that runs only when 2 things are true.
// Write a JavaScript program that runs when 1 of 2 things are true.
// Write a JavaScript program that runs when both things are not true.

// WHITEBOARDING:

// Display the current day and time:
//   variable: weekDay - array of 0 between 6
//   give each weekday value the name of the weekdays in order
//   get.day() method to retrieve current day's number
//   display weekDay
//   variable: time = getTime() Which only displays the number of milliseconds since January 1, 1970.
// Convert number to string:
//   Make a variable called number and give it a number value.
//   Use the num.toString() method to convert said number.
// Convert string to number:
//   Make a variable called string and give it a string value.
//   Use the parseInt() or the parseFloat() mehtods to convert the string value into a number.
// Detects and prints what kind of datatype something is
//   typeof() method
// Adds 2 numbers together
//   variable: firstNum - prompt for first number
//   variable: secondNum - prompt for second number
//   document write sum of the two numbers
// Runs only when 2 things are true
//   variable: first thing
//   variable: second thing
//   function run if both first thing AND second thing are true
//   else do not run
// Runs when 1 of 2 things are true
//   function run if first thing OR second thing is true
//   else do not run
// Runs when both things are false
//   function run if both first thing AND second thing are false
//   else do not run

// CODE:

// not sure why the first variable is necessary to get it to work?
function day_time() {
  var today = new Date();
  var weekday = new Array(6);
  // var time = d.getTime();
  var hour = today.getHours();
  var min = today.getMinutes();
  if (min < 10) {
    min = "0" + min;
  }
  var sec = today.getSeconds();
  if (sec < 10) {
    sec = "0" + sec;
  }

  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  console.log(weekday[today.getDay()] + " " + hour + ":" + min + ":" + sec);
}

day_time ();

function convertNumber() {
  var number = 72468;
  console.log(number.toString());
}

convertNumber();

function convertString() {
  var string = "72468"
  console.log(parseInt(string));
}

convertString();

// this does not work as a prompt because no matter what you write in the prompt the computer reads it as a string
// var object = prompt("Write an example of a datatype");
function dataType () {
  let object = true;
  console.log(typeof object);
}

dataType();

var object = "Write any kind of datatype in this variable";
console.log(typeof object);

var object1 = "Hello.";
console.log(typeof object1);

var object2 = 7;
console.log(typeof object2);

// homework

// I did not even try prompt but I am assuming it wont work because it will return a string
const sum = (firstNum, secondNum) => {
  document.write(firstNum + secondNum);
};

var thing1 = true;
var thing2 = true;

function willItRun (thing1, thing2) {
  if (thing1 && thing2) {
    return "both are true";
  } else {
    return false;
  }
};

function howAboutNow (thing1, thing2) {
  if (thing1 || thing2) {
    return "one is true";
  } else {
    return false;
  }
};

function lastOne (thing1, thing2) {
  if (!thing1 || !thing2) {
    return "both are false"
  } else {
    return false;
  }
};
