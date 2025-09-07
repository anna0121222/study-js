// 서버에서 게시글 목록 요청하기
// 받은 게시글 중 id가 짝수인 게시글의 아이디와 제목 출력하기
// const getList = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//     const posts = await response.json();

//     posts
//         .filter((post) => post.id % 2 === 0)
//         .forEach(({ id, title }) => {
//             console.log(id, title);
//         });
// };

// await getList();

// let user = {
//     id: 1,
//     name: "test",
//     age: 20,
// };

// // // 비구조화 할당
// let { id, name, ...rest } = user;

// console.log(id, name);
// console.log(rest);

// 전달받은 댓글들 중, postId가 3인 댓글 내용 출력
// const replyService = (function () {
//     const getList = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/comments"
//         );
//         const replies = await response.json();
//         return callback(replies);
//     };

//     return { getList: getList };
// })();

// const replyLayout = (function () {
//     const showList = (replies) => {
//         return replies.filter(({ postId, ...rest }) => postId === 3);
//     };

//     return { showList: showList };
// })();

// const show = async () => {
//     const replies = await replyService.getList(replyLayout.showList);
//     console.log(replies);
// };

// await show();

// 전달받은 회원들 중, zipcode만 출력
// const userService = (function () {
//     const getList = async (callback) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/users"
//         );
//         const users = await response.json();
//         callback(users);
//     };

//     return { getList: getList };
// })();

// const printZipcode = (users) => {
//     users
//         .map((user) => user.address)
//         .forEach(({ zipcode, ...rest }) => console.log(zipcode));
// };

// userService.getList(printZipcode);

// 게시글 정보를 전달받은 후,
// 게시글 조회를 모듈화하여 사용한다.
// 게시글 조회시, 회원의 번호를 전달받아서 그 작성자의 게시글만 가져온다.
// 전체 정보를 출력한다.
// const postService = (() => {
//     const getList = async (callback, userId) => {
//         const response = await fetch(
//             "https://jsonplaceholder.typicode.com/posts"
//         );
//         const posts = await response.json();
//         if (callback) {
//             return callback(posts, userId);
//         }
//     };

//     return { getList: getList };
// })();

// const postLayout = (() => {
//     const showList = (posts, userId) => {
//         return posts.filter((post) => post.userId === userId);
//     };

//     return { showList: showList };
// })();

// const printPost = () => {
//     postService.getList(postLayout.showList, 3).then(console.log);
// };

// printPost();

// 앨범 정보를 전달받은 후,
// 회원 번호가 5인 정보를 모두 가져온다.
// 그 중 userId와 title만 출력한다.
const albumService = (() => {
    const getList = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/albums"
        );
        const albums = await response.json();
        return callback(albums);
    };

    return { getList: getList };
})();

const albumLayout = (() => {
    const showList = (albums) => {
        return albums.filter(({ userId, ...rest }) => userId === 3);
    };

    return { showList: showList };
})();

const printAlbum = () => {
    albumService.getList(albumLayout.showList).then(console.log);
};

printAlbum();
