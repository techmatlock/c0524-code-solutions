/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  // only add keys ['foo', 'baz'] that exist in source object
  for (const key in source) {
    for (let i = 0; i < keys.length; i++) {
      if (key === keys[i] && source[key] !== undefined) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
