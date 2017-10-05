// PROJECT:
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

// WHITEBOARDING

// Display the current day and time:
//   variable: weekDay - array of 0 between 6
//   give each weekday value the name of the weekdays in order
//   get.day() method to retrieve current day's number
//   display weekDay
//   variable: time = getTime() Which only displays the number of milliseconds since January 1, 1970. 

// not sure why the first variable is necessary to get it to work?
var d = new Date();
var weekday = new Array(7);
var time = d.getTime();

weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

document.write(weekday[d.getDay()] + " " + time);
