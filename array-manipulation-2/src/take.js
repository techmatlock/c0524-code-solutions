'use strict';
/* exported take */
function take(array, count) {
  const newArr = [];
  for (let i = 0; i < count; i++) {
    if (array[i] === undefined) {
      // An empty array literal '[]' is undefined
      return newArr;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
