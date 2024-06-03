'use strict';
/*
1. Add event listener for buttons on parent container (modal-buttons)
2. Use event target to get the closest element
3. Save reference to element in a variable
*/
const $spanElements = document.querySelectorAll('span');
const $modal = document.querySelector('dialog');
const $accuracyScore = document.querySelector('.accuracy-score');
const $modalBtns = document.querySelector('.modal-buttons');
if (!$modal) throw new Error('$modal does not exist');
if (!$accuracyScore) throw new Error('$accuracyScore does not exist');
let currentIndex = 0;
let count = 0;
let guessedCorrect = 0;
function calculateAccuracy() {
  const accuracy = (guessedCorrect / count) * 100;
  $accuracyScore?.insertAdjacentHTML('afterend', accuracy.toString());
}
function resetGame() {
  $modal?.classList.add('hidden');
  currentIndex = 0;
  count = 0;
  guessedCorrect = 0;
}
function showModal() {
  $modal?.showModal();
  if (!$modalBtns) throw new Error('$modalBtns does not exist');
  $modalBtns.addEventListener('click', (event) => {
    const eventTarget = event.target; // the element on which the event was fired
    const btnClicked = eventTarget.closest('button');
    if (!btnClicked) throw new Error('No button clicked');
    if (btnClicked.className === 'modal-no') {
      $modal?.classList.add('hidden');
    } else {
      resetGame();
    }
  });
}
function trackCharacter(event) {
  // Track every time key entered even if wrong.
  count++;
  if (event.key === $spanElements[currentIndex].textContent) {
    guessedCorrect++;
    // Remove any styling
    $spanElements[currentIndex].classList.remove('red-color');
    $spanElements[currentIndex].classList.remove('border__bottom-red');
    $spanElements[currentIndex].classList.remove('border-bottom');
    // Add styling
    $spanElements[currentIndex].classList.add('green-color');
    currentIndex++;
  } else {
    $spanElements[currentIndex].classList.add('red-color');
    $spanElements[currentIndex].classList.add('border__bottom-red');
  }
  if (!$spanElements[currentIndex]) {
    calculateAccuracy();
    showModal();
  }
  $spanElements[currentIndex].classList.add('border-bottom');
}
document.addEventListener('keydown', trackCharacter);
