/* exported tail */
function tail(array: unknown[]): unknown[] {
  const newArr = [];
  for (let i = 1; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
