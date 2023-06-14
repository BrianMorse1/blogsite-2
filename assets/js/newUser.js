const signupFormHandler = (event) => {
    event.preventDefault();
    
const email = document.querySelector('#new-email').value;
const password = document.querySelector('#new-password').value; 
const username = document.querySelector('#new-username').value;

const data = {
       name: username, 
       email: email,
       password: password
    };
    fetch('./api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('User created:', data);
    })
    .catch(error => {
        console.log('Error:', error);
    });
};

const submit = document.querySelector('#newSubmit');

submit.addEventListener('click', function(event) {
    signupFormHandler(event);
});


