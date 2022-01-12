fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))

fetch('https://jsonplaceholder.typicode.com/userId=2')
    .then(response => response.json())
    .then(users => console.log(users))

fetch('https://jsonplaceholder.typicode.com/postId=5')
    .then(response => response.json())
    .then(users => console.log(users))








