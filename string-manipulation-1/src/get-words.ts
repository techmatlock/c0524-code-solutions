/* exported getWords */
function getWords(string: string): string[] {
  // split string with commas
  let wordsArr = [];
  if (string) {
    wordsArr = string.split(' ');
    return wordsArr;
  } else {
    return [];
  }
}
