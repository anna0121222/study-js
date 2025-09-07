// 댓글 모듈 만들기(replyService)
// 작성, 목록, 수정, 삭제
const resultService = () => {
    const write = (reply) => {};
    const getList = (page = 1, callback) => {
        if (callback) {
            callback();
        }
    };
    const update = (reply) => {};
    const remove = (id) => {};

    return {
        write: write,
        getList: getList,
        update: update,
        remove: remove,
    };
};
