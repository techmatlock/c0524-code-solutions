'use strict';
/* exported isUpperCased */
function isUpperCased(word) {
  const capitalizedWord = word.toUpperCase();
  if (word === capitalizedWord) {
    return true;
  } else {
    return false;
  }
}
