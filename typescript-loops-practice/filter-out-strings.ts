/* exported filterOutStrings */
function filterOutStrings(values: any[]): number[] {
  return values.filter((val) => typeof val !== 'string');
}
