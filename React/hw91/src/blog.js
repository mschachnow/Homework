import './index.css';
import $ from 'jquery';

async function loadBlogs() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response)}
}
fetch()
    .then()
    .then(users => {
        console.log(users)
        users.forEach(user => {
            $(`<li>${user.name, user.email, user.postId}</li>`).appendTo('#user');
        });
    })

fetch(`https://jsonplaceholder.typicode.com/posts?userId=${blog.id}`)
    .then(response => response.json())
    .then(users => console.log(users))

fetch(`https://jsonplaceholder.typicode.com/comments?postId=${blog.id}`)
    .then(response => response.json())
    .then(users => console.log(users))








