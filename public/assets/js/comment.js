document.querySelector("#add-comment-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const body = document.querySelector("#comment-body").value;
    const post_id = document.querySelector("#post-id").textContent

    fetch("/api/comments/", {
        method: "POST",
        body: JSON.stringify({
            body, 
            post_id
        })
    })
    .then(() => {
        
    })
}) 