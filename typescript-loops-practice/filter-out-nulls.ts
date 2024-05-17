/* exported filterOutNulls */
function filterOutNulls(values: any[]): number[] {
  const newArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i]) {
      newArr.push(values[i]);
    }
  }
  return newArr;
}
