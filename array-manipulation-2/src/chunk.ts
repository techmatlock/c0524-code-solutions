/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const chunks = new Array(size);
  console.log(size);
  for (let i = 0; i < size; i++) {
    // array[0] array[1] ; array[2] array[3]
    console.log('i:', i);
    chunks.push([array[i + size]]);
  }
  console.log('chunks', chunks);

  return chunks;
}
