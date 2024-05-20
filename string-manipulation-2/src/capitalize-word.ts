/* exported capitalizeWord */
function capitalizeWord(word: string): string {
  const firstLetter = word[0].toUpperCase();
  let restOfLetters = '';

  for (let i = 1; i < word.length; i++) {
    restOfLetters += word[i];
  }
  restOfLetters = restOfLetters.toLowerCase();

  let newWord = firstLetter + restOfLetters;
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
  }
  return newWord;
}
