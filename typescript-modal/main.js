'use strict';
const $openModal = document.querySelector('.open-modal');
const $dismissModal = document.querySelector('.dismiss-modal');
const $dialog = document.querySelector('dialog');
if (!$openModal || !$dismissModal || !$dialog)
  throw new Error('The query failed.');
function handleOpenModal() {
  $dialog?.showModal();
}
function closeModal() {
  $dialog?.close();
}
$openModal.addEventListener('click', handleOpenModal);
$dismissModal.addEventListener('click', closeModal);
