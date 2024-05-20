'use strict';
/* exported takeRight */
function takeRight(array, count) {
  let newArr = [];
  // start from end; take last x amount (count) elements
  for (let i = array.length - 1; count > 0; i--) {
    if (count > array.length) {
      newArr = array;
      return newArr;
    }
    newArr.unshift(array[i]);
    count--;
  }
  return newArr;
}
