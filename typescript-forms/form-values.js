'use strict';
const $form = document.querySelector('#contact-form');
function handleSubmit(event) {
  event.preventDefault();
  // get elements property of the object that stores the DOM reference to the form
  const $formElements = $form.elements;
  const $inputName = $formElements.name.value;
  const $inputEmail = $formElements.email.value;
  const $message = $formElements.message.value;
  const result = { name: $inputName, email: $inputEmail, message: $message };
  console.log(result);
  $form.reset();
}
$form.addEventListener('submit', handleSubmit);
