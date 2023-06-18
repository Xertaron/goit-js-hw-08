import throttle from 'lodash.throttle';

const key = 'feedback-form-state';

form = document.querySelector('.feedback-form');

form.addEventListener('submit', formInput);
form.addEventListener('input', throttle(onInputData, 500));

let formData = JSON.parse(localStorage.getItem(key)) || {};
const { email, message } = form.elements;
reloadPage();

function onInputData(event) {
  formData = { email: email.value, message: message.value };
  localStorage.setItem(key, JSON.stringify(formData));
}

function reloadPage() {
  if (formData) {
    email.value = formData.email || '';
    message.value = formData.message || '';
  }
}

function formInput(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });

  if (email.value === '' || message.value === '') {
    return alert('Please fill required fields');
  }

  localStorage.removeItem(key);
  event.currentTarget.reset();
  formData = {};
}
