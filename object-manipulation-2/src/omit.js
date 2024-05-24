'use strict';
/* exported omit */
function omit(source, keys) {
  const newObj = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      newObj[key] = source[key];
    }
  }
  return newObj;
}
