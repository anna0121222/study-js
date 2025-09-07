// let result = [];

function then(callback) {
    return new Promise((resolve) => {
        resolve(callback());
    });
}

// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//         result = posts;
//     });

// console.log(result);

// const getPosts = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();
//     posts.forEach((post) => {
//         console.log(post.title);
//     });
// };

// await getPosts();
