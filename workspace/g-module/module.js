// 모듈화
// 하나로 합쳐져 있던 코드들을 작은 단위로 분리하여
// 유지보수와 업데이트를 조금 더 편하고 쉽게 하기 위한 작업이다.
// 1개의 함수는 무조건 1개의 목적성만 가진다.

// 선언과 동시에 사용
// (function () {})();

// 서비스
// const getService = (function () {
//     // 각 기능
//     function getOne() {}

//     function getSecond() {}

//     function getThird() {}

//     // 한 번에 객체로 모아서 리턴
//     return { getOne: getOne, getSecond: getSecond, getThird: getThird };
// })();

// getService.getOne();
// getService.getSecond();
// getService.getThird();

// 서버와 통신(CRUD)
const postService = () => {
    const write = (post) => {};
    const getList = (page = 1, callback) => {
        if (callback) {
            callback();
        }
    };
    const getPost = (id, callback) => {
        if (callback) {
            callback();
        }
    };
    const update = (post) => {};
    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        getPost: getPost,
        update: update,
        remove: remove,
    };
};
