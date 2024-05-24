/* exported omit */
function omit(
  source: Record<string, unknown>,
  keys: string
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};

  for (const key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
