import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form input'),
  textareaMessage: document.querySelector('.feedback-form textarea'),
};
let storage = JSON.parse(localStorage.getItem(STORAGE_KEY));

if (!storage) {
  storage = {};
} else {
  if (storage.email) {
    refs.inputEmail.value = storage.email;
  }
  if (storage.message) {
    refs.textareaMessage.value = storage.message;
  }
}
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(e) {
  e.preventDefault();
  console.log(storage);
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  storage = {};
}

function onFormInput(e) {
  storage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}
