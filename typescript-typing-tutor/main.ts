/*
1. Query DOM for all <span> elements
2. Create an event listener on the document when user triggers keydown event
3. Increase index of $spanElements array every time user creates keydown event
4. Create conditional to check if event.key is equal to $spanElements textcontent
5. If correct key entered:
    * Remove bottom border from $spanElements[currentIndex]
    * Add bottom border to $spanElements[currentIndex + 1]
    * Change css color to green for $spanElements[currentIndex]
   If wrong key entered:
    * Change css color to red for $spanElements[currentIndex]
6. Check to see if currentIndex is greater than $spanElements.length. If so, game over.
7. Calculate accuracy by taking the sum of correct guesses divided by the total length of $spanElements

Adding a modal
1. Create the variables for the modal window, the yes button, and the no button that reference the DOM elements.
   * If user selects yes to play again, reset currentIndex, accuracy, count, guessedCorrect
   * If no, close modal and don't reset any variables.
2. Add event listeners for the yes and no button.
3. Add the CSS for the modal window and add the dialog element in the HTML.  Add accuracy score to modal window.
*/

const $spanElements = document.querySelectorAll('span');
const $modal = document.querySelector('dialog');

let currentIndex = 0;
let count = 0;
let guessedCorrect = 0;

function calculateAccuracy(): void {
  const accuracy = (guessedCorrect / count) * 100;
  console.log(accuracy);
  if (!$modal) throw new Error('$modal does not exist');
  $modal?.showModal();
}

function trackCharacter(event: KeyboardEvent): void {
  // Track every time key entered even if wrong.
  count++;

  if (event.key === $spanElements[currentIndex].textContent) {
    guessedCorrect++;

    // Remove any styling if previously wrong key entered
    $spanElements[currentIndex].classList.remove('red-color');
    $spanElements[currentIndex].classList.remove('border__bottom-red');

    // Add styling if correct key entered
    $spanElements[currentIndex].classList.remove('border-bottom');
    $spanElements[currentIndex].classList.add('green-color');
    $spanElements[currentIndex + 1].classList.add('border-bottom');

    currentIndex++;
    if (currentIndex >= $spanElements.length - 1) {
      calculateAccuracy();
    }
  } else {
    $spanElements[currentIndex].classList.add('red-color');
    $spanElements[currentIndex].classList.add('border__bottom-red');
  }
}

// Apply bottom border to first index when the game first starts
if (currentIndex === 0) {
  $spanElements[currentIndex].className = 'border-bottom';
}

document.addEventListener('keydown', trackCharacter);
