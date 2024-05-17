/* exported capitalize */
function capitalize(word: string): string {
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
