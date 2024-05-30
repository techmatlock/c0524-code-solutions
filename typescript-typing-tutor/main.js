'use strict';
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

I can't figure out how to only stop game after key pressed on index 25
*/
const $spanElements = document.querySelectorAll('span');
let currentIndex = 0;
let count = 1;
let guessedCorrect = 0;
const numOfSpanElements = $spanElements.length;
function calculateAccuracy() {
  const accuracy = guessedCorrect / numOfSpanElements;
  console.log(accuracy);
}
function trackCharacter(event) {
  if (count >= $spanElements.length) {
    calculateAccuracy();
    return;
  }
  // Every time key entered even if wrong
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
