'use strict';
let numOfClicks = 0;
const $hotBtn = document.querySelector('.hot-button');
const $clickCount = document.querySelector('.click-count');
if (!$hotBtn) throw new Error('The $hotBtn query failed.');
function increaseCount() {
  if (!$hotBtn || !$clickCount) {
    throw new Error('The $hotButton or $clickCount query failed');
  }
  numOfClicks += 1;
  $clickCount.textContent = `Clicks: ${numOfClicks}`;
  if (numOfClicks < 4) {
    $hotBtn.className = 'hot-button cold';
  } else if (numOfClicks < 7) {
    $hotBtn.className = 'hot-button cool';
  } else if (numOfClicks < 10) {
    $hotBtn.className = 'hot-button tepid';
  } else if (numOfClicks < 13) {
    $hotBtn.className = 'hot-button warm';
  } else if (numOfClicks < 16) {
    $hotBtn.className = 'hot-button hot';
  } else {
    $hotBtn.className = 'hot-button nuclear';
  }
}
$hotBtn.addEventListener('click', increaseCount);
