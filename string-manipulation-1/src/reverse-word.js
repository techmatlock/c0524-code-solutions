'use strict';
/* exported reverseWord */
function reverseWord(word) {
  let reverseStr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseStr += word[i];
  }
  return reverseStr;
}
