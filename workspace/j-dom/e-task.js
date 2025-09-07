const button = document.querySelector("input[type=button]");
const input = document.querySelector("#input");
const trList = document.querySelectorAll("tbody tr");
let tempTr = null;
let tempText = null;

button.addEventListener("click", (e) => {
    let check = false;

    if (tempTr) {
        tempTr.style.background = "#fff";
        tempTr.firstElementChild.innerText = tempText;
    }

    trList.forEach((tr) => {
        const td = tr.firstElementChild;

        if (td.innerText === input.value) {
            check = true;

            tempTr = tr;
            tempText = td.innerText;

            tr.style.background = "#ef5350";
            td.innerText = "★" + input.value;
        }
    });

    if (!check) {
        alert("다시 시도해주세요.");
        input.value = "";
    }
});
