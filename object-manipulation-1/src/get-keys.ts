/* exported getKeys */
function getKeys(object: Record<string, unknown>): string[] {
  const keyArr: string[] = [];
  for (const key in object) {
    keyArr.push(key);
  }
  return keyArr;
}
