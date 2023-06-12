const { response } = require("express");

const signupFormHandler = (event) => {
    event.preventDefault();
    
const email = document.querySelector('#new-username').value.trim();
const password = document.querySelector('#new-password').value.trim();
const username = document.querySelector('#new-username').value.trim();


const data = {
       name: username, 
       email: email,
       password: password
    }
};


const submit = document.querySelector('#newSubmit');

submit.addEventListener('click', function() {
    signupFormHandler(response)
});


