'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const oddEvenArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddEvenArr.push('even');
    } else {
      oddEvenArr.push('odd');
    }
  }
  return oddEvenArr;
}
