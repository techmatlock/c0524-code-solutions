const $leftNavigator = document.querySelector(
  '.left-navigation'
) as HTMLElement;
const $rightNavigator = document.querySelector(
  '.right-navigation'
) as HTMLElement;
const $currentImage = document.querySelector('.new-img') as HTMLImageElement;
const $allDots = document.querySelectorAll('.dot');
const $dotsContainer = document.querySelector('.dots') as HTMLElement;

if (!$currentImage) throw new Error('No $currentImage found.');
if (!$leftNavigator) throw new Error('No $leftNavigator found.');
if (!$rightNavigator) throw new Error('No $rightNavigator found.');
if (!$allDots) throw new Error('No $allDots found.');

const images: string[] = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];

let count: number = 0;

let intervalID = setInterval(nextImage, 3000);

$leftNavigator.addEventListener('click', (): void => {
  clearInterval(intervalID);

  const $currentImage = document.querySelector('.new-img') as HTMLImageElement;
  if (!$currentImage) throw new Error('No $newImg found.');

  const $currentImg = $currentImage.getAttribute('src');
  if (!$currentImg) throw new Error('No $currentImg found.');

  images.forEach((img) => {
    if (img.includes($currentImg)) {
      const newIndex = images.indexOf($currentImg);
      if (newIndex === 0) {
        count = images.length - 1;
        $currentImage.src = images[count];
      } else {
        count = newIndex - 1;
        $currentImage.src = images[count];
      }
    }
  });

  $allDots.forEach((dot) => {
    dot.classList.remove('solid');
    if (dot.getAttribute('data-item-id') === count.toString()) {
      dot.classList.add('solid');
    }
  });
  intervalID = setInterval(nextImage, 3000);
});

$rightNavigator.addEventListener('click', (): void => {
  clearInterval(intervalID);

  const $currentImage = document.querySelector('.new-img') as HTMLImageElement;
  if (!$currentImage) throw new Error('No $newImg found.');

  const $currentImg = $currentImage.getAttribute('src');
  if (!$currentImg) throw new Error('No $currentImg found.');

  images.forEach((img) => {
    if (img.includes($currentImg)) {
      const newIndex = images.indexOf($currentImg);
      count = newIndex + 1;
      if (count > images.length - 1) {
        $currentImage.src = images[0];
        count = 0;
      } else {
        $currentImage.src = images[count];
      }
    }
  });

  $allDots.forEach((dot) => {
    dot.classList.remove('solid');
    if (dot.getAttribute('data-item-id') === count.toString()) {
      dot.classList.add('solid');
    }
  });
  intervalID = setInterval(nextImage, 3000);
});

$dotsContainer.addEventListener('click', (event: Event): void => {
  clearInterval(intervalID);

  const $eventTarget = event.target as HTMLElement;
  if (!$eventTarget) throw new Error('No $eventTarget found');

  if (!$eventTarget.matches('.dot')) return;

  const itemId = $eventTarget.getAttribute('data-item-id');

  if (!itemId) return;
  $currentImage.src = images[+itemId];

  $allDots.forEach((dot) => {
    dot.classList.remove('solid');
    if (dot.getAttribute('data-item-id') === itemId) {
      dot.classList.add('solid');
    }
  });

  intervalID = setInterval(nextImage, 3000);
});

function nextImage(): void {
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
