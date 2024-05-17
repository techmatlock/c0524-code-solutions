/* exported last */
function last(array: unknown[]): unknown {
  if (array) {
    return array[array.length - 1];
  } else {
    return undefined;
  }
}
