'use strict';
/* exported countdown */
function countdown(num) {
  const countdownArr = [];
  for (let i = num; i >= 0; i--) {
    countdownArr.push(i);
  }
  return countdownArr;
}
