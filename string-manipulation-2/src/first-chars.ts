/* exported firstChars */
function firstChars(length: number, string: string): string {
  let result = '';
  for (let i = 0; i < length; i++) {
    if (string[i] === undefined) {
      return result;
    }
    result += string[i];
  }
  return result;
}
