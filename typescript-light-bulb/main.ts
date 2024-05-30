/*

1. Save the the body element & sun element references to variables
2. Add a click event listener on the sun element
3. In the callback function, toggle classes on the variables in step 1.

*/

const $bodyElement = document.querySelector('body');
const $sunElement = document.querySelector('.sun');

console.log($bodyElement);
console.log($sunElement);

function handleClick(): void {
  $bodyElement?.classList.toggle('dark-background');
  $sunElement?.classList.toggle('dark-sun');
}

$sunElement?.addEventListener('click', handleClick);
