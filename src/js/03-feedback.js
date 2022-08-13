import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.jfeedback-form, textarea'),
};
    


refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextareaInput, 2000));

populateTextarea();

function onTextareaInput(evt) {
    evt.preventDefault()
  const message = evt.target.value;

    localStorage.setItem(STORAGE_KEY, message);
    
}

function onFormSubmit(evt) {
  evt.preventDefault();

  console.log('Отправляем форму');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateTextarea() {
  const savedMessage = localStorage.getItem(STORAGE_KEY);

  if (savedMessage) {
    refs.textarea.value = savedMessage;
  }
}

const formData = {};

refs.form.addEventListener('input', e => {
 console.log(e.target.name);
console.log(e.target.value);

formData[e.target.name] = e.target.value;

console.log(formData);
});