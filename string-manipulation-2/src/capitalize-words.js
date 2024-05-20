'use strict';
/* exported capitalizeWords */
function capitalizeWords(string) {
  const words = string.toLowerCase().split(' ');
  // map method creates new array
  const modifiedWords = words.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });
  return modifiedWords.join(' ');
}
