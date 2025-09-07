const button = document.getElementById("get-todos");

button.addEventListener("click", async (e) => {
    NodeList.prototype.filter = Array.prototype.filter;

    await todoService.getList(todoLayOut.showList);

    const todos = document.querySelectorAll("tr");

    // (2)미완료 -> 완료 변경되면 더이상 해당 코드 실행 안됨.
    todos.forEach((todo) => {
        const td = todo.firstElementChild;
        if (td.innerHTML === "미완료") {
            td.style.cursor = "pointer";
        }
        td.addEventListener("click", (e) => {
            if (e.target.innerText === "미완료") {
                td.parentElement.classList.add("on");
                td.innerText = "완료";
                td.style.cursor = "unset";
            }
        });

        // (1) 완료로 변경되어도 매번 코드 실행됨.
        // const uncompletedTodos = document
        //     .querySelectorAll("tr")
        //     .filter((tr) => !tr.classList.contains("on"));
        // uncompletedTodos.forEach((todo) => {
        //     const td = todo.firstElementChild;
        //     td.style.cursor = "pointer";

        //     td.addEventListener("click", (e) => {
        //         td.parentElement.classList.add("on");
        //         td.innerText = "완료";
        //         td.style.cursor = "unset";
        //     });
    });
});
