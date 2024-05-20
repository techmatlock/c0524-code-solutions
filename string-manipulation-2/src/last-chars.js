'use strict';
/* exported lastChars */
function lastChars(length, string) {
  // loop but start at last index
  let result = '';
  if (length > string.length) {
    result += string;
  }
  result = string.slice(-length);
  return result;
}
