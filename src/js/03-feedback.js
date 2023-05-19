import throttle from 'lodash.throttle';

const STORAGE_KEY_EMAIL = 'email';
const STOGALE_KEY_MESSAGE = 'message';

const formEl = document.querySelector('form.feedback-form');

setInitialValuesFromStorage()
formEl.addEventListener('input', throttle(onInput,500));
formEl.addEventListener('submit', onSubmit);



function onInput(e) {
    const field = e.target.name;
    const value = e.target.value;
    localStorage.setItem(field, value);  
}

function setInitialValuesFromStorage() {
    const savedEmail = localStorage.getItem(STORAGE_KEY_EMAIL);
    const savedMessage = localStorage.getItem(STOGALE_KEY_MESSAGE);

    formEl.querySelector('[name="email"]').value = savedEmail;
    formEl.querySelector('[name="message"]').value = savedMessage;
}

function onSubmit(e) {
    e.preventDefault();
    localStorage.clear();
    e.currentTarget.reset();
}