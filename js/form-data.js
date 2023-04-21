// Form email validation and storing user data
//get elements
const form = document.querySelector('#contact-form');
const username = document.querySelector('#username') 
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const emailErrorId = document.querySelector('#email-error');

// email validation function 
function validateEmail(emailStr) { return emailStr.toLowerCase() !== emailStr }

// add event to display error 
form.addEventListener(('submit'), (e) => {

    // getting the values from elements
    const userEmail = email.value;

    // validating email
    if(validateEmail(userEmail)) {  
        e.preventDefault(); 
        emailErrorId.style.visibility = 'visible' 
    }
});



