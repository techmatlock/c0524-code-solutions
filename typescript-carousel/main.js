"use strict";
const $leftNavigator = document.querySelector('.left-navigation');
const $rightNavigator = document.querySelector('.right-navigation');
const $newImage = document.querySelector('.new-img');
if (!$leftNavigator)
    throw new Error('No $leftNavigator found.');
if (!$rightNavigator)
    throw new Error('No $rightNavigator found.');
if (!$newImage)
    throw new Error('No $newImg found.');
const images = ['images/001.png', 'images/004.png', 'images/007.png', 'images/025.png', 'images/039.png'];
$leftNavigator.addEventListener('click', () => {
    clearInterval(intervalID);
    const $currentImg = $newImage.getAttribute('src');
    if (!$currentImg)
        throw new Error('No $currentImg found.');
    images.forEach((img) => {
        if (img.includes($currentImg)) {
            const newIndex = img.indexOf($currentImg);
            $newImage.src = images[newIndex];
            count = newIndex;
            setInterval(nextImage);
        }
    });
});
$rightNavigator.addEventListener('click', () => {
    clearInterval(intervalID);
    const $currentImage = $newImage.getAttribute('src');
    if (!$currentImage)
        throw new Error('No $currentImage found');
    images.forEach((img) => {
        if (img.includes($currentImage)) {
            const newIndex = img.indexOf($currentImage);
            $newImage.src = images[newIndex + 1];
        }
    });
});
let count = 0;
function nextImage() {
    if (count > images.length - 1) {
        count = 0;
    }
    $newImage.src = images[count];
    count++;
}
const intervalID = setInterval(nextImage, 1000);
