'use strict';
const $leftNavigator = document.querySelector('.left-navigation');
const $rightNavigator = document.querySelector('.right-navigation');
const $currentImage = document.querySelector('.new-img');
const $allDots = document.querySelectorAll('.dot');
const $dotsContainer = document.querySelector('.dots');
if (!$currentImage) throw new Error('No $currentImage found.');
if (!$leftNavigator) throw new Error('No $leftNavigator found.');
if (!$rightNavigator) throw new Error('No $rightNavigator found.');
if (!$allDots) throw new Error('No $allDots found.');
if (!$allDots) throw new Error('No $dotsContainer found.');
const images = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let count = 0;
const intervalID = setInterval(nextImage, 3000);
const timeoutID = setTimeout(() => {
  nextImage();
}, 3000);
$leftNavigator.addEventListener('click', () => {
  clearInterval(intervalID);
  clearTimeout(timeoutID);
  const $currentImage = document.querySelector('.new-img');
  if (!$currentImage) throw new Error('No $newImg found.');
  const $currentImg = $currentImage.getAttribute('src');
  if (!$currentImg) throw new Error('No $currentImg found.');
  images.forEach((img) => {
    if (img.includes($currentImg)) {
      const newIndex = images.indexOf($currentImg);
      if (newIndex === 0) {
        $currentImage.src = images[images.length - 1];
      } else {
        $currentImage.src = images[newIndex - 1];
      }
      setInterval(nextImage, 3000);
    }
  });
});
$rightNavigator.addEventListener('click', () => {
  clearInterval(intervalID);
  clearTimeout(timeoutID);
  const $currentImage = document.querySelector('.new-img');
  if (!$currentImage) throw new Error('No $newImg found.');
  const $currentImg = $currentImage.getAttribute('src');
  if (!$currentImg) throw new Error('No $currentImg found.');
  images.forEach((img) => {
    if (img.includes($currentImg)) {
      const newIndex = img.indexOf($currentImg);
      count = newIndex + 1;
      $currentImage.src = images[count];
      setInterval(nextImage, 3000);
    }
  });
});
$dotsContainer.addEventListener('click', (event) => {
  clearInterval(intervalID);
  clearTimeout(timeoutID);
  const $eventTarget = event.target;
  if (!$eventTarget) throw new Error('No $eventTarget found');
  if ($eventTarget.matches('.dot')) {
    const itemId = $eventTarget.getAttribute('data-item-id');
    $currentImage.src = images[itemId];
    setInterval(nextImage, 3000);
  }
});
function nextImage() {
  if (count > images.length - 1) {
    count = 0;
  }
  $allDots.forEach((dot) => {
    dot.classList.remove('solid');
    if (dot.getAttribute('data-item-id') === count.toString()) {
      dot.classList.add('solid');
    }
  });
  $currentImage.src = images[count];
  count++;
}
