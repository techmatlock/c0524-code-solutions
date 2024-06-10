setTimeout(() => {
  const $message = document.querySelector('.message');
  if (!$message) throw new Error('$message not found');
  $message.textContent = 'Hello There';
}, 2000);
