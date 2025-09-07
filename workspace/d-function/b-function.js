// function add(number1, number2) {
//     return number1 + number2;
// }

// let plus = add;

// let result = plus(1, 3);
// console.log(result);

// arrow function: 익명 함수
// 재사용의 목적이 아닌 일회성으로 사용한다.
// 이를 재사용하고자 한다면, 원하는 이름의 변수에 담아서 함수로 사용한다.
// let add = (number1, number2) => {
//     return number1 + number2;
// };

// let add = (number1, number2) => number1 + number2;
// console.log(add(3, 4));

// 기본값 설정(필수사항이 아닌 선택사항을 필요로 할 때)
// const printInfo = (age, address, name = "익명") => {
//     console.log(age, address, name);
// };

// printInfo(20, "경기도", "한동석");
// printInfo(100, "서울");

// 두 정수를 전달받고 두 수를 곱한다.
// 이 때, 만약 apply라는 매개변수가 true라면 결과값에서 10을 뺀다.
// apply는 기본값이 false이다.

// A && B: A가 false면 전체가 false, A가 true면 전체가 B
const multiply = (number1, number2, apply = false) => {
    return number1 * number2 - (apply && 10);
};

let result = multiply(1, 3, false);
console.log(result);
