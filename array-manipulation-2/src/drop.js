'use strict';
/* exported drop */
function drop(array, count) {
  // don't include up to index count in new array
  const newArr = [];
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
