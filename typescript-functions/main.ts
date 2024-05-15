function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('convertMinutesToSeconds:', convertMinutesToSeconds(5));

function greet(name: string): string {
  return `Hey ${name}`;
}

console.log('greet:', greet('Mark'));

const getArea = (width: number, height: number): number => {
  return width * height;
};

console.log('getArea:', getArea(5, 17));

const getFirstName = (person: {
  firstName: string;
  lastName: string;
}): string => {
  return person.firstName;
};

console.log(
  'getFirstName:',
  getFirstName({ firstName: 'Mark', lastName: 'Matlock' })
);

const getLastElement = (array: unknown[]): unknown => {
  return array[array.length - 1];
};

console.log('getLastElement:', getLastElement([true, true, false, true]));

// function callOtherFunction (otherFunction: Function, params: unknown): unknown {
//   return otherFunction(params);
// };

// function calcAverage (avg1: number[]): number {
//   return (avg1[0] + avg1[1]) / 2;
// }

// callOtherFunction(calcAverage, [9, 7]);

function callOtherFunction(otherFunction: Function, params: unknown): number {
  return otherFunction(params);
}

function calcAverage(avg1: number): number {
  return avg1 / 2;
}

console.log(callOtherFunction(calcAverage, 'hello'));
console.log(callOtherFunction(convertMinutesToSeconds, 10));
