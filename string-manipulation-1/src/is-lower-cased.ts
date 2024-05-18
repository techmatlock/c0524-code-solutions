/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  const lowercasedWord = word.toLowerCase();
  if (word === lowercasedWord) {
    return true;
  } else {
    return false;
  }
}
