// let user = {
//     name: "한동석",
//     age: 20,
//     address: "경기도",
//     "data-x": 10,
// };

// // 1. 마침표로 접근
// console.log(user.name);

// // 새로운 프로퍼티 추가
// user.data = 0;
// console.log(user.data);

// // 2. 대괄호로 접근
// console.log(user["data-x"]);

// 기초 실습
// 회원 객체를 선언한다.
// 프로퍼티는 다음과 같다.
// 이름, 주소1, 주소2, 주소3
// 객체를 선언하고 각 값을 원하는 값으로 넣어서
// 모든 프로퍼티를 출력해본다.
let user = {
    name: "한동석",
    address1: "경기도",
    address2: "남양주시",
    address3: "화도읍",
    printAddress: function () {
        for (let i = 0; i < 3; i++) {
            console.log(this[`address${i + 1}`]);
        }
    },
};

console.log(user.name);
user.printAddress();

// function() {}
// 접근한 객체가 this

// () => {}
// 선언된 scope 객체가 this

// 결론
// 1) 클래스를 사용하지 않을 때
// this가 필요하면 function(){}
// this가 필요없으면 () => {}
//
// 2) 클래스를 사용할 때
// this로 클래스의 필드에 접근할 때 () => {}
// this로 클래스의 필드 중 해당 객체에 접근할 때 function() => {}

// class Test {
//     name = "Test";
//     obj = {
//         name: "obj",
//         printName: () => {
//             console.log(this.name);
//         },
//     };
// }

// let test = new Test();
// test.obj.printName();
