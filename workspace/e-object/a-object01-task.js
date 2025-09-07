// 상품 정보를 객체로 구성한다.
// 상품 번호, 상품명, 가격, 재고-1, 재고-2
// 각 정보를 출력하되, 재고-1과 재고-2는 반복문을 사용해서 출력한다.
// 재고-1이 실재고이고, 재고-2는 기타재고이다. 단, key값은 동일한 stock이다.
// 상품 정보에 재고-1을 사용하여 총 가격을 리턴하는 메소드를 선언한다.
const product = {
    id: 1,
    name: "보리차",
    price: 1300,
    "stock-1": 32,
    "stock-2": -2,
    getTotal: function () {
        return this.price * this["stock-1"];
    },
};

// with(객체명) {}
// 중괄호 안에서 현재 scope에 없는 것들은 with에 작성한 객체에서 찾아준다.
// 반복적으로 객체명을 사용해야할 때 편하게 작성할 수 있다.
with (product) {
    console.log(id, name, price);
    for (let i = 0; i < 2; i++) {
        console.log(product[`stock-${i + 1}`]);
    }

    console.log(getTotal());
}
