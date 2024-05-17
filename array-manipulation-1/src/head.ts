/* exported head */
function head(array: unknown[]): unknown {
  if (array) {
    return array[0];
  } else {
    return undefined;
  }
}
