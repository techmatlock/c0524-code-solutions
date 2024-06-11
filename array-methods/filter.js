'use strict';
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];
function isEven(num) {
  const arr = [];
  for (let i = 0; i < num.length; i++) {
    if (num % 2 === 0) {
      arr.push(num);
    }
  }
  return arr;
}
const filteredArr = numbers.filter(isEven);
console.log('filteredArr:', filteredArr);
function isName(name) {
  for (let i = 0; i < name.length; i++) {
    if (name.includes('D') || name.includes('d')) {
      return;
    } else {
      console.log('No D:', name);
    }
  }
}
console.log(names.filter(isName));
