const input = document.getElementById("page");

input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        postService.getPosts(postLayout.showPost, e.target.value);
        e.target.value = "";
    }
});

// input.addEventListener("keyup", (e) => {
//     postService.getPosts(postLayout.showPost, e.target.value);
//     e.target.value = "";
// });

// const buttons = document.querySelectorAll("button");

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => {
//         postService.getPosts(postLayout.showPost, e.target.innerText);
//     });
// });

// const button = document.getElementById("get-posts");

// button.addEventListener("click", (e) => {
//     postService.getPosts(postLayout.showPost, 1);
// });
