/* exported chunk */
function chunk(array: unknown[], size: number): unknown {
  const newArr = [];
  let count = 0;

  while (count < array.length) {
    for (let i = 0; i < size; i++) {
      newArr.push([array[i]]);
    }
    count++;
  }
  return newArr;
}
