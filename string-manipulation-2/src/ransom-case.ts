/* exported ransomCase */
function ransomCase(string: string): string {
  let newStr = '';

  // i needs to equal 1, 3, 5, ...
  for (let i = 1; i < string.length; i += 2) {
    if (i % 2 !== 0) {
      newStr += string[i].toUpperCase();
    } else {
      newStr += string[i].toLowerCase();
    }
  }
  return newStr;
}
