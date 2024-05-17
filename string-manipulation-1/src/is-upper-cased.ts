/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  const capitalizedWord = word.toUpperCase();
  if (word === capitalizedWord) {
    return true;
  } else {
    return false;
  }
}
