const emailInput = document.getElementById('email-input');
const submitBtn = document.querySelector('.subscribe-button');
 

submitBtn.addEventListener('click', e => {
    e.preventDefault();
    if(emailInput.validity.valid != true) {
        emailInput.parentElement.classList.add('invalid');
    }else if(emailInput.value == "") {
        emailInput.parentElement.classList.add('invalid');
    }else {
        emailInput.parentElement.classList.remove('invalid');
    }
})