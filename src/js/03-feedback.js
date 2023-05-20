import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state'

const formEl = document.querySelector('form.feedback-form');
const storedValues = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

setInitialValuesFromStorage(storedValues);

formEl.addEventListener('input', throttle(onInput,500));
formEl.addEventListener('submit', onSubmit);



function onInput(e) {
    const field = e.target.name;
    const value = e.target.value;
    storedValues[field] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(storedValues));  
}

function setInitialValuesFromStorage(current) {    
    if (current.email) { formEl.querySelector('[name="email"]').value = current.email;};
    if (current.message) {formEl.querySelector('[name="message"]').value = current.message};
}

function onSubmit(e) {
    e.preventDefault();
    localStorage.clear();
    e.currentTarget.reset();
}