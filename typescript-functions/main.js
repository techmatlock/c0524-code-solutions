'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));
function greet(name) {
  return `Hey ${name}`;
}
console.log('greet:', greet('Mark'));
const getArea = (width, height) => {
  return width * height;
};
console.log('getArea:', getArea(5, 17));
const getFirstName = (person) => {
  return person.firstName;
};
console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Mark', lastName: 'Matlock' })
);
const getLastElement = (array) => {
  return array[array.length - 1];
};
console.log('getLastElement:', getLastElement([true, true, false, true]));
// function callOtherFunction (otherFunction: Function, params: unknown): unknown {
//   return otherFunction(params);
// };
// function calcAverage (avg1: number[]): number {
//   return (avg1[0] + avg1[1]) / 2;
// }
// callOtherFunction(calcAverage, [9, 7]);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
function calcAverage(avg1) {
  return avg1 / 2;
}
console.log(callOtherFunction(calcAverage, 'hello'));
console.log(callOtherFunction(convertMinutesToSeconds, 10));
