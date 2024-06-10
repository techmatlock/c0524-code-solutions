'use strict';
const $message = document.querySelector('.message');
if (!$message) throw new Error('$message not found');
setTimeout(() => {
  $message.textContent = 'Hello There';
}, 2000);
