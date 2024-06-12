const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const filteredArr: number[] = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log('Even numbers:', filteredArr);

function isName(name: any): unknown {
  if (!name.includes('D') && !name.includes('d')) {
    return name;
  }
}

const filteredNames: string[] = names.filter(isName);

console.log('No D:', filteredNames);
