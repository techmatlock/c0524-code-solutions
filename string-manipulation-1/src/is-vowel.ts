/* exported isVowel */
function isVowel(char: string): boolean {
  const vowelArr = ['a', 'e', 'i', 'o', 'u'];
  const lowercasedChar = char.toLowerCase();

  for (let i = 0; i < vowelArr.length; i++) {
    if (vowelArr[i] === lowercasedChar) {
      return true;
    }
  }
  return false;
}
