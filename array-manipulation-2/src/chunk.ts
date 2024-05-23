/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  // create sub arrays as chunks based on size
  // push chunks into final array
  const chunks: any[] = [];

  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      chunks.push([]);
    }
    // access last chunks index and push element
    chunks[chunks.length - 1].push(array[i]);
  }
  return chunks;
}
