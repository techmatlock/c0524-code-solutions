'use strict';
/* exported dropRight */
function dropRight(array, count) {
  const newArr = [];
  if (array === undefined) {
    return array;
  }
  for (let i = 0; i <= array.length - 1 - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
