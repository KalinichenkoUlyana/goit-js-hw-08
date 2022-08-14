import throttle from "lodash.throttle";


const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onTextareaInput),500);
form.addEventListener('submit', onFormSubmit);


ReturnDataLocalStorage();

function onTextareaInput(event) {
    event.preventDefault()
    const emailData = form.email.value
    const textData = form.message.value
   
    const DataInfo = {emailData,textData};

    localStorage.setItem('feedback-form-state', JSON.stringify(DataInfo));
};


function onFormSubmit (event) {
    event.preventDefault();
const DataForm = JSON.parse(localStorage.getItem('feedback-form-state'));
localStorage.removeItem('feedback-form-state');
    form.reset();
    return;
};
  

function ReturnDataLocalStorage() {
    const storageData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (storageData) {
        form.email.value = storageData.emailData;
        form.message.value = storageData.textData;
    }
}
