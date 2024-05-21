import 짜장면 from "../assets/images/food/짜장면.png";
import 짬뽕 from "../assets/images/food/짬뽕.png";
import 볶음밥 from "../assets/images/food/볶음밥.png";
import 탕수육 from "../assets/images/food/탕수육.png";
import 깐풍기 from "../assets/images/food/깐풍기.png";
import 짜장밥 from "../assets/images/food/짜장밥.png";
import 짬뽕밥 from "../assets/images/food/짬뽕밥.png";
import 간짜장 from "../assets/images/food/간짜장.png";

export const test = "test data";

export const monthData = [
    {
        id : 1,
        month : "2024-04",
    },
    {
        id : 2,
        month : "2024-03",
    },
    {
        id : 3,
        month : "2024-02",
    },
    {
        id : 4,
        month : "2024-01",
    }
]

export const category = [
    {
        id: 1,
        name: "밥류"
    },
    {
        id: 2,
        name: "면류"
    },
    {
        id: 3,
        name: "볶음류"
    },
    {
        id: 4,
        name: "탕류"
    },
    {
        id: 5,
        name: "음료"
    },
    {
        id: 6,
        name: "특식"
    }
]

export const status = [
    {
        id: 1,
        name: "판매중",
        description: "판매중인 상태입니다."
    },
    {
        id: 2,
        name: "품절",
        description: "품절된 상태입니다."
    },
    {
        id: 3,
        name: "비공개",
        description: "비공개된 상태입니다."
    }
]

export const menuData = [
    {
        id: 1,
        name: "짜장면",
        price: 6000,
        foodCategory: "면류",
        status: "판매중",
        pictureURL: 짜장면
    },
    {
        id: 2,
        name: "짬뽕",
        price: 8000,
        foodCategory: "면류",
        status: "판매중",
        pictureURL: 짬뽕
    },
    {
        id: 3,
        name: "볶음밥",
        price: 7000,
        foodCategory: "밥류",
        status: "판매중",
        pictureURL: 볶음밥
    },
    {
        id: 4,
        name: "탕수육",
        price: 15000,
        foodCategory: "특식",
        status: "판매중",
        pictureURL: 탕수육
    },
    {
        id: 5,
        name: "깐풍기",
        price: 13000,
        foodCategory: "특식",
        status: "판매중",
        pictureURL: 깐풍기
    },
    {
        id: 6,
        name: "짜장밥",
        price: 8000,
        foodCategory: "밥류",
        status: "판매중",
        pictureURL: 짜장밥
    },
    {
        id: 7,
        name: "짬뽕밥",
        price: 9000,
        foodCategory: "밥류",
        status: "판매중",
        pictureURL: 짬뽕밥
    },
    {
        id: 8,
        name: "간짜장",
        price: 7000,
        foodCategory: "면류",
        status: "판매중",
        pictureURL: 간짜장
    }
];

export const orderData = [
    {
        id : 1,
        paymentId : 1,
        foodName : "육회비빔밥",
        quantity : 1,
        sumOfCost : 12000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:24"
    },
    {
        id : 2,
        paymentId : 1,
        foodName : "왕돈까스",
        quantity : 2,
        sumOfCost : 30000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:25"
    },
    {
        id : 3,
        paymentId : 1,
        foodName : "김치우동",
        quantity : 1,
        sumOfCost : 7800,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:26"
    },
    {
        id : 4,
        paymentId : 2,
        foodName : "치즈돈까스",
        quantity : 1,
        sumOfCost : 13900,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:27"
    },
    {
        id : 5,
        paymentId : 2,
        foodName : "돌솥비빔밥",
        quantity : 2,
        sumOfCost : 17000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:28"
    },
    {
        id : 6,
        paymentId : 3,
        foodName : "스시세트",
        quantity : 1,
        sumOfCost : 25000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:29"
    },
    {
        id : 7,
        paymentId : 3,
        foodName : "치킨마요덮밥",
        quantity : 3,
        sumOfCost : 33000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:30"
    },
    {
        id : 8,
        paymentId : 4,
        foodName : "불고기버거",
        quantity : 2,
        sumOfCost : 24000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:31"
    },
    {
        id : 9,
        paymentId : 4,
        foodName : "순대국밥",
        quantity : 1,
        sumOfCost : 8000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:32"
    },
    {
        id : 10,
        paymentId : 5,
        foodName : "샐러드세트",
        quantity : 1,
        sumOfCost : 15000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:33"
    },
    {
        id : 11,
        paymentId : 6,
        foodName : "마라탕",
        quantity : 2,
        sumOfCost : 25000,
        orderHistoryStatus : "COOKING_COMPLETE",
        orderedAt : "2024-04-29 11:34"
    },
    {
        id : 12,
        paymentId : 7,
        foodName : "짬뽕",
        quantity : 1,
        sumOfCost : 12000,
        orderHistoryStatus : "COOKING_COMPLETE",
        orderedAt : "2024-04-29 11:35"
    },
    {
        id : 13,
        paymentId : 7,
        foodName : "탕수육",
        quantity : 1,
        sumOfCost : 18000,
        orderHistoryStatus : "COOKING_COMPLETE",
        orderedAt : "2024-04-29 11:36"
    },
    {
        id : 14,
        paymentId : 8,
        foodName : "쌀국수",
        quantity : 3,
        sumOfCost : 24000,
        orderHistoryStatus : "PAYMENT_COMPLETE",
        orderedAt : "2024-04-29 11:37"
    },
    {
        id : 15,
        paymentId : 9,
        foodName : "팟타이",
        quantity : 2,
        sumOfCost : 32000,
        orderHistoryStatus : "PAYMENT_COMPLETE",
        orderedAt : "2024-04-29 11:38"
    },
    {
        id : 16,
        paymentId : 10,
        foodName : "초밥세트",
        quantity : 1,
        sumOfCost : 28000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:39"
    },
    {
        id : 17,
        paymentId : 10,
        foodName : "우동",
        quantity : 2,
        sumOfCost : 15000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:40"
    },
    {
        id : 18,
        paymentId : 11,
        foodName : "피자",
        quantity : 1,
        sumOfCost : 20000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:41"
    },
    {
        id : 19,
        paymentId : 11,
        foodName : "파스타",
        quantity : 2,
        sumOfCost : 26000,
        orderHistoryStatus : "NEW",
        orderedAt : "2024-04-29 11:42"
    },
    {
        id : 20,
        paymentId : 12,
        foodName : "스테이크",
        quantity : 1,
        sumOfCost : 35000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:43"
    },
    {
        id : 21,
        paymentId : 12,
        foodName : "샐러드",
        quantity : 1,
        sumOfCost : 12000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:44"
    },
    {
        id : 22,
        paymentId : 13,
        foodName : "햄버거",
        quantity : 3,
        sumOfCost : 33000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:45"
    },
    {
        id : 23,
        paymentId : 13,
        foodName : "핫도그",
        quantity : 2,
        sumOfCost : 16000,
        orderHistoryStatus : "COOKING",
        orderedAt : "2024-04-29 11:46"
    },
    {
        id : 24,
        paymentId : 14,
        foodName : "김밥",
        quantity : 1,
        sumOfCost : 5000,
        orderHistoryStatus : "COOKING_COMPLETE",
        orderedAt : "2024-04-29 11:47"
    },
    {
        id : 25,
        paymentId : 15,
        foodName : "라면",
        quantity : 2,
        sumOfCost : 7000,
        orderHistoryStatus : "COOKING_COMPLETE",
        orderedAt : "2024-04-29 11:48"
    },
    {
        id : 26,
        paymentId : 15,
        foodName : "컵밥",
        quantity : 1,
        sumOfCost : 4000,
        orderHistoryStatus : "COOKING_COMPLETE",
        orderedAt : "2024-04-29 11:49"
    },
    {
        id : 27,
        paymentId : 16,
        foodName : "마라샹궈",
        quantity : 1,
        sumOfCost : 18000,
        orderHistoryStatus : "PAYMENT_COMPLETE",
        orderedAt : "2024-04-29 11:50"
    },
    {
        id : 28,
        paymentId : 17,
        foodName : "타코",
        quantity : 3,
        sumOfCost : 21000,
        orderHistoryStatus : "PAYMENT_COMPLETE",
        orderedAt : "2024-04-29 11:51"
    },
    {
        id : 29,
        paymentId : 18,
        foodName : "삼겹살",
        quantity : 1,
        sumOfCost : 25000,
        orderHistoryStatus : "PAYMENT_COMPLETE",
        orderedAt : "2024-04-29 11:52"
    },
    {
        id : 30,
        paymentId : 18,
        foodName : "불고기",
        quantity : 1,
        sumOfCost : 23000,
        orderHistoryStatus : "PAYMENT_COMPLETE",
        orderedAt : "2024-04-29 11:53"
    },

];

export const orderHistoryStatus = [
    {
        value : "NEW",
        label : "신규주문"
    },
    {
        value : "COOKING",
        label : "조리중"
    },
    {
        value : "COOKING_COMPLETE",
        label : "조리완료"
    },
    {
        value : "PAYMENT_COMPLETE",
        label : "결제완료"
    }
]

export const saleData = [
    {
        id : 1,
        order : 37,
        sale : 4432100,
        date : "2024-05-14"
    },
    {
        id : 2,
        order : 32,
        sale : 3132100,
        date : "2024-05-13"
    },
    {
        id : 3,
        order : 45,
        sale : 5125000,
        date : "2024-05-12"
    },
    {
        id : 4,
        order : 29,
        sale : 3028900,
        date : "2024-05-11"
    },
    {
        id : 5,
        order : 60,
        sale : 7598000,
        date : "2024-05-10"
    }
];

export const notificationData = [
    {
        id: 12,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 12, 상품: 모듬생선구이, 수량: 3; 상품: 육회비빔밥, 수량: 5; 상품: 갈비탕, 수량: 1; ",
        createdAt: "2024-05-19 22:38:55",
        read: true
    },
    {
        id: 11,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 11, 상품: 모듬생선구이, 수량: 5; 상품: 갈비탕, 수량: 1; 상품: 된장찌개, 수량: 6; ",
        createdAt: "2024-05-19 22:38:53",
        read: true
    },
    {
        id: 10,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 10, 상품: 김치찌개, 수량: 4; 상품: 모듬생선구이, 수량: 5; 상품: 갈비탕, 수량: 3; ",
        createdAt: "2024-05-19 22:38:51",
        read: true
    },
    {
        id: 9,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 9, 상품: 미역국, 수량: 6; 상품: 갈비탕, 수량: 1; 상품: 모듬생선구이, 수량: 2; ",
        createdAt: "2024-05-19 22:38:48",
        read: true
    },
    {
        id: 8,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 8, 상품: 갈비탕, 수량: 10; 상품: 설렁탕, 수량: 5; 상품: 모듬생선구이, 수량: 1; ",
        createdAt: "2024-05-19 22:38:46",
        read: true
    },
];