'use strict';
/* exported reverse */
function reverse(array) {
  const reverseArr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reverseArr.push(array[i]);
  }
  return reverseArr;
}
