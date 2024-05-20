'use strict';
/* exported truncate */
function truncate(length, string) {
  let newStr = '';
  for (let i = 0; i < length && i < string.length; i++) {
    newStr += string[i];
  }
  return newStr + '...';
}
