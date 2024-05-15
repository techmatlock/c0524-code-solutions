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

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

console.log(callOtherFunction(convertMinutesToSeconds, 10));
console.log(callOtherFunction(getLastElement, ['hello', 'Goodbye', 'Aloha']));
