// 히어로가 몬스터를 공격하여 성장하는 게임을 제작한다.

// 히어로 객체
// 이름, 체력, 공격력, 방어력
// 공격하기: 공격 대상의 몬스터 체력을 공격력만큼 제거하고
//          방어력만큼 몬스터의 공격을 방어한다.
// const hero = {};

// hero.name = "슈퍼맨";
// hero.hp = 5;
// hero.power = 5;
// hero.shield = 10;
// hero.attach = function (monster) {
//     let result = monster.power - hero.shield;
//     result = result <= 0 ? 1 : result;

//     monster.hp -= this.power;
//     this.hp -= result;
// };

// 몬스터 객체
// 이름, 체력, 공격력, 생존 유무(true)
// 전투 후 체력 반영: 전투 후 hp가 0이하라면 생존 유무를 false로 변경한다.
// 만약 사망했다면, 이름 프로퍼티를 삭제한다.
// const monster = {};
// monster.name = "타락한 슈퍼우먼";
// monster.hp = 5;
// monster.power = 3;
// monster.alive = true;
// monster.isAlive = function () {
//     const condition = monster.hp > 0;
//     monster.alive = condition;
//     return condition;
// };

// hero.attach(monster);

// console.log(hero);
// !monster.isAlive() && delete monster.name;

// console.log(monster);

// 마켓에서 판매하는 상품은 단 1개이다.
// 이름, 상품명, 가격, 재고
// 판매하기: 고객마다 쿠폰 할인율이 다르다.
//          구매한 고객의 쿠폰 할인율을 적용해서 판매한다.
const market = {};

market.product = "딸기";
market.price = 8000;
market.stock = 55;
market.sell = function (customer) {
    let discount = 1 - customer.coupon / 100;
    customer.money -= this.price * discount;
    this.stock--;
};

// 고객 객체를 2개 정의한다.
// 이름, 잔고, 쿠폰 할인율
// 고객 2명은 서로 할인율을 다르게 설정한다.
const lee = {};
const hong = {};

lee.name = "이순신";
lee.money = 10000;
lee.coupon = 30;

hong.name = "홍길동";
hong.money = 20000;
hong.coupon = 10;

market.sell(lee);
console.log(market);
console.log(lee);

market.sell(hong);
console.log(market);
console.log(hong);
