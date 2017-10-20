"use strict";
const cars = ['ford', 'chevy', 'mazda', 'subaru'];
console.log(cars.length);

const moreCars = ['jeep', 'bmw', 'smart', 'honda'];

let totalCars = cars.concat(moreCars);

console.log(moreCars.indexOf('honda'));

const stringOfCars = totalCars.join(', ');
console.log(stringOfCars);

totalCars = stringOfCars.split(', ');

let carsInReverse = totalCars.reverse();
console.log(carsInReverse);

carsInReverse.sort();
console.log(carsInReverse);

alert(carsInReverse.indexOf('benz'));

const removedCars = carsInReverse.slice(3, 5);

carsInReverse.splice(1, 2, 'ford', 'honda');
console.log(carsInReverse);

carsInReverse.push('bmw', 'chevy');

const deletedItem = carsInReverse.pop();
console.log(deletedItem);

const shiftedCar = carsInReverse.shift();
console.log(shiftedCar);

carsInReverse.unshift('tesla');
console.log(carsInReverse);

const numbers = [23, 45, 0, 2];
numbers.forEach((item, index) => {
  number[index] item + 2;
});
console.log(numbers);
