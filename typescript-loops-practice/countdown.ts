/* exported countdown */
function countdown(num: number): number[] {
  const countdownArr = [];
  for (let i = num; i >= 0; i--) {
    countdownArr.push(i);
  }
  return countdownArr;
}
