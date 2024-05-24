'use strict';
/* exported defaults */
function defaults(target, source) {
  for (const key in source) {
    // if key != in target
    if (target[key] === undefined) {
      target[key] = source[key];
    }
  }
}
