/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];

  for (let i = 0; i < count; i++) {
    if (array[i] === undefined) {
      // An empty array literal '[]' is undefined
      return newArr;
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr;
}
