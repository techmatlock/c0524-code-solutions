'use strict';
/* exported invert */
function invert(source) {
  const newObj = {};
  // take the source[key] and set as the key
  for (const key in source) {
    newObj[source[key]] = key;
  }
  return newObj;
}
