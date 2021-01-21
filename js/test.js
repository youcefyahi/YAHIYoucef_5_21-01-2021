let url = "https://jsonplaceholder.typicode.com/users";
fetch(url).then(response => response.json().then(data => {
    console.log(data)
}));



const inserPost = function(data) {
    let response = fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(data)
    })


}

inserPost({
    name: "jean",
    age: 55
})