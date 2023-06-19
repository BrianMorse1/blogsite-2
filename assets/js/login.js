const loginFormHander = async (event) => {
event.preventDefault();
const logEmail = document.querySelector('#login-email').value;
const logPassword = document.querySelector('#login-password').value;
let data;

if (logEmail && logPassword) {
    data = {
        email: logEmail,
        password: logPassword
    };
   try {
    const log = await fetch('./api/login-route', {
    method: 'Post',
    headers: {
        'Content-Type': 'application/json'
   },
    body: JSON.stringify(data)
});
    if (log.ok){
    alert('Logged in!');
    document.location.replace('/');
 }else{
     alert('Invalid Credentials');
 }} catch (error){
    console.log(error);
 }} else {
    alert('Please fill out all fields');
 }};

const login = document.querySelector('#loginSubmit');

login.addEventListener('click', function(event) {
    loginFormHander(event);
});