fetch("/api/posts/all")
.then(res => res.json())
.then(data => {
 
    for(i = 0; i < data.length; i++) {
        const newLi = document.createElement("li")
        newLi.textContent = data[i].title

        document.querySelector("ul").appendChild(newLi)
    }
})