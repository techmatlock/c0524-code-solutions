'use strict';
async function getData() {
  try {
    // the fetch method is being called with one argument, and we are awaiting the promise
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    // we have to validate response because fetch will not reject status codes 404 or 500
    if (!response.ok) throw new Error('Failed to get a response');
    // await the parsing of the response body as JSON
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
getData();
