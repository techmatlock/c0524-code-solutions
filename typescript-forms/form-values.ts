interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

const $form = document.querySelector('#contact-form') as HTMLFormElement;

function handleSubmit(event: Event): void {
  event.preventDefault();

  // get elements property of the object that stores the DOM reference to the form
  const $formElements = $form.elements as FormElements;

  const $inputName = $formElements.name.value;
  const $inputEmail = $formElements.email.value;
  const $message = $formElements.message.value;

  const result = { $inputName, $inputEmail, $message };

  console.log(result);

  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
