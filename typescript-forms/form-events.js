'use strict';
const $inputName = document.querySelector('#user-name');
const $inputEmail = document.querySelector('#user-email');
const $textArea = document.querySelector('#user-message');
if (!$inputName) throw new Error('$inputName does not exist');
if (!$inputEmail) throw new Error('$inputEmail does not exist');
if (!$textArea) throw new Error('$textArea does not exist');
function handleFocus(event) {
  console.log('focus event fired');
  const eventTarget = event.target;
  console.log(`eventTarget.name: ${eventTarget.name}`);
}
function handleBlur(event) {
  console.log('blur event fired');
  const eventTarget = event.target;
  console.log('eventTarget.name', eventTarget.name);
}
function handleInput(event) {
  const eventTarget = event.target;
  console.log('value of name:', eventTarget.value);
}
$inputName.addEventListener('focus', handleFocus);
$inputName.addEventListener('blur', handleBlur);
$inputName.addEventListener('input', handleInput);
$inputEmail.addEventListener('focus', handleFocus);
$inputEmail.addEventListener('blur', handleBlur);
$inputEmail.addEventListener('input', handleInput);
$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
