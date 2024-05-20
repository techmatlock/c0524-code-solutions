'use strict';
/* exported chunk */
function chunk(array, size) {
  const chunks = [];
  const chunk = [];
  console.log('size', size);
  for (let i = 0; i < array.length; i++) {
    for (let i = 0; i < size; i++) {
      chunk.push(array[i]);
    }
  }
  chunks.push(chunk);
  console.log('chunks', chunks);
  return chunks;
}
