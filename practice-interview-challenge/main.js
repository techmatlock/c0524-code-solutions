'use strict';
function getRangeReport(start, end) {
  const newObj = {};
  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  newObj.total = sum;
  const oddArr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
  }
  newObj.odds = oddArr;
  const evenArr = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  newObj.evens = evenArr;
  const rangeArr = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  newObj.range = rangeArr;
  let count = 0;
  let avgSum = 0;
  for (let i = start; i <= end; i++) {
    avgSum += i;
    count++;
  }
  const average = avgSum / count;
  newObj.average = average;
  return newObj;
}
getRangeReport(5, 10);
