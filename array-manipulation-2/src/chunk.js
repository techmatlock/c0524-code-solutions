'use strict';
/* exported chunk */
function chunk(array, size) {
  const newArr = [];
  let count = 0;
  while (count < array.length) {
    for (let i = 0; i < array.length; i++) {
      newArr.push([array[i]]);
    }
    count++;
  }
  return newArr;
}
