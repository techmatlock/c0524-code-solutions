/* exported getValues */
function getValues(object: Record<string, unknown>): unknown[] {
  const valuesArr: unknown[] = [];
  for (const key in object) {
    valuesArr.push(object[key]);
  }
  return valuesArr;
}
