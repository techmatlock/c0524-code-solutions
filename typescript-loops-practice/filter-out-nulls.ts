/* exported filterOutNulls */
function filterOutNulls(values: any[]): number[] {
  return values.filter((val) => val !== null);
}
