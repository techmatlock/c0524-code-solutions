'use strict';
const heroes = ['batman', 'superman', 'hulk', 'spiderman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(`randomIndex: ${randomIndex}`);
const randomHero = heroes[randomIndex];
console.log(`randomHero: ${randomHero}`);
// Array Methods
const library = [
  { title: 'harry potter', author: 'jk rowling' },
  { title: '1984', author: 'george orwell' },
  { title: 'the hard sell', author: 'kate winchester' },
];
const lastBook = library.pop();
console.log('lastBook:', lastBook);
const firstBook = library.shift();
console.log('firstBook:', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js); // adds element to end of array
library.unshift(css); // adds element to front of array
library.splice(1, 1);
console.log('library:', library);
// String methods
const fullName = 'Mark Matlock';
const firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
// Object methods
const employee = {
  name: 'Mark',
  age: 30,
  position: 'Student',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys:', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues:', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs:', employeePairs);
