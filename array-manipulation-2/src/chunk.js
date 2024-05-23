'use strict';
/* exported chunk */
function chunk(array, size) {
  // create sub arrays as chunks based on size
  // push chunks into final array
  const chunks = [];
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      chunks.push([]);
    }
    // access last chunks index and push element
    chunks[chunks.length - 1].push(array[i]);
  }
  return chunks;
}
