/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  // don't include up to index count in new array
  const newArr: unknown[] = [];
  for (let i = count; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
