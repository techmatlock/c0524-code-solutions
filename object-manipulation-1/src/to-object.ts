/* exported toObject */
function toObject(keyValuePair: [string, unknown]): unknown {
  const obj = {};
  obj[keyValuePair[0]] = keyValuePair[1];
  return obj;
}
