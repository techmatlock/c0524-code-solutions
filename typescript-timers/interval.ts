const $message = document.querySelector('.countdown-display') as HTMLElement;
if (!$message) throw new Error('$message not found.');

let count = 3;
const intervalId = setInterval(() => {
  if (count <= 0) {
    $message.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalId);
  } else {
    $message.textContent = count.toString();
    count--;
  }
}, 1000);
