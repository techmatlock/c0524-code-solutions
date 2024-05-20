/* exported numVowels */
function numVowels(string: string): number {
  // first create array from string param
  // use filter method on array to find matching letters with vowels array
  const lowercaseArr = string.toLowerCase().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  let count = 0;
  lowercaseArr.filter((letter) => {
    if (vowels.includes(letter)) {
      count += 1;
    }
    return count;
  });
  return count;
}
