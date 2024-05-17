'use strict';
/* exported last */
function last(array) {
  if (array) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}
