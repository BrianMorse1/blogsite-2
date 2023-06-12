const loginFormHander = async (event) => {
event.preventDefault();
const email = document.querySelector('#login-username').value.trim();
const password = document.querySelector('#login-password').value.trim();

if (email && password) {

    //check the fetch route if there are any problems
    const response = await fetch('/api/users/login', {
    method: 'POST', 
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
});

if(response.ok) {
    //code for succesful login
    window.location.replace('/layouts/main');
    } else {
    //failed login code
    alert('Incorrect username/password. Please try again or create a profile');
}}else{
    alert('Please enter both a username and password');
}};

