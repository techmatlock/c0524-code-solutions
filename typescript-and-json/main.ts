interface Book {
  book: string;
  title: string;
  author: string;
}

// An array of object literals is being assigned to bookArray of type array of Book objects
const bookArray: Book[] = [
  {
    book: 'Harry Potter',
    title: 'Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    book: '1984',
    title: '1984',
    author: 'George Orwell',
  },
  {
    book: 'The Hobbit',
    title: 'An Unexpected Journey',
    author: 'J.R.R Tolkien',
  },
];

console.log('bookArray:', bookArray);
console.log('bookArray type:', typeof bookArray);

const json = JSON.stringify(bookArray);

console.log('json string:', json);
console.log('json string type:', typeof json);

const studentJSON = '{"id": 15, "name": "Mark Matlock"}';

console.log('student:', studentJSON);
console.log('student type:', typeof studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log('studentObj:', studentObj);
console.log('studentObj type:', typeof studentObj);
