'use strict';
/* exported getKeys */
function getKeys(object) {
  const keyArr = [];
  for (const key in object) {
    keyArr.push(key);
  }
  return keyArr;
}
