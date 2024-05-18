'use strict';
/* exported isLowerCased */
function isLowerCased(word) {
  const lowercasedWord = word.toLowerCase();
  if (word === lowercasedWord) {
    return true;
  } else {
    return false;
  }
}
