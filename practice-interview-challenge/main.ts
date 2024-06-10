interface Report {
  total: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): Report {
  const newObj: Report = {};

  let sum: number = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  newObj.total = sum;

  const oddArr: number[] = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      oddArr.push(i);
    }
  }
  newObj.odds = oddArr;

  const evenArr: number[] = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      evenArr.push(i);
    }
  }
  newObj.evens = evenArr;

  const rangeArr: number[] = [];
  for (let i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  newObj.range = rangeArr;

  let count: number = 0;
  let avgSum: number = 0;
  for (let i = start; i <= end; i++) {
    avgSum += i;
    count++;
  }
  const average: number = avgSum / count;
  newObj.average = average;

  return newObj;
}

getRangeReport(5, 10);
