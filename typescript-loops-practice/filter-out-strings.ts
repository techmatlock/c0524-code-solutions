/* exported filterOutStrings */
function filterOutStrings(values: any[]): number[] {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
