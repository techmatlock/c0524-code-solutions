const width: number = 9;
const height: number = 5;

const area: number = width * height;
console.log('the value of area is:', area);
console.log('typeof area:', typeof area);

const bill: number = 35;
const payment: number = 50;
const change: number = payment - bill;
console.log('the value of change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 15;
const midterm: number = 4;
const final: number = 2;

const grade: number = (quizzes + midterm + final) / 3;
console.log('the value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Mark';
const lastName: string = 'Matlock';
const fullName: string = firstName + ' ' + lastName;
console.log('the value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 9;
const isAcidic: boolean = pH < 7;
console.log('the value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headCount: number = 57;
const isSparta: boolean = headCount === 300;
console.log('the value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('the value of motto:', motto);
console.log('typeof motto:', typeof motto);
