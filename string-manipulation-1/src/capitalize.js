'use strict';
/* exported capitalize */
function capitalize(word) {
  let newStr = '';
  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      newStr = word[i].toUpperCase();
    } else {
      newStr += word[i].toLowerCase();
    }
  }
  return newStr;
}
