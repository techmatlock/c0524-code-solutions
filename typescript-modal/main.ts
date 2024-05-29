const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');

if (!$openModal || !$dismissModal || !$dialog)
  throw new Error('The query failed.');

function handleOpenModal(): void {
  $dialog?.showModal();
}

function closeModal(): void {
  $dialog?.close();
}

$openModal.addEventListener('click', handleOpenModal);

$dismissModal.addEventListener('click', closeModal);
