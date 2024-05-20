/* exported swapChars */
function swapChars(
  firstIndex: number,
  secondIndex: number,
  string: string
): string {
  const newArr = string.split('');
  const firstLetter = newArr[firstIndex];
  const secondLetter = newArr[secondIndex];
  newArr.splice(firstIndex, 1, secondLetter); // (start, deleteCount, element to add to array)
  newArr.splice(secondIndex, 1, firstLetter);

  return newArr.join('');
}
