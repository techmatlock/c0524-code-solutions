'use strict';
/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const suffixArr = [];
  for (let i = 0; i < words.length; i++) {
    suffixArr.push(words[i] + suffix);
  }
  return suffixArr;
}
