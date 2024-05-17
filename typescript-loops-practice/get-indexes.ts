/* exported getIndexes */
function getIndexes(array: any[]): number[] {
  const arrayOfIndexes = [];
  for (let i = 0; i < array.length; i++) {
    arrayOfIndexes.push(i);
  }
  return arrayOfIndexes;
}
