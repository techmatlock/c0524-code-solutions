/* exported invert */
function invert(source: Record<string, string>): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  // take the source[key] and set as the key
  for (const key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
