const postFormHandler = (event) => {
    event.preventDefault();

    const title = document.querySelector('#postTitle').value;
    const  text = document.querySelector('#postBody').value;

    const data = {
        title: title,
        text: text
    };

    fetch('./api/posts',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log('Error:', error);

    });
};

const submit = document.querySelector('#postSubmit');

submit.addEventListener('click', function(event) {
    postFormHandler(event);
});








