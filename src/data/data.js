import 짜장면 from "../assets/images/food/짜장면.png";
import 짬뽕 from "../assets/images/food/짬뽕.png";
import 볶음밥 from "../assets/images/food/볶음밥.png";
import 탕수육 from "../assets/images/food/탕수육.png";
import 깐풍기 from "../assets/images/food/깐풍기.png";
import 짜장밥 from "../assets/images/food/짜장밥.png";
import 짬뽕밥 from "../assets/images/food/짬뽕밥.png";
import 간짜장 from "../assets/images/food/간짜장.png";
import React from "react";

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
    // {
    //     id : 16,
    //     paymentId : 10,
    //     foodName : "초밥세트",
    //     quantity : 1,
    //     sumOfCost : 28000,
    //     orderHistoryStatus : "NEW",
    //     orderedAt : "2024-04-29 11:39"
    // },
    // {
    //     id : 17,
    //     paymentId : 10,
    //     foodName : "우동",
    //     quantity : 2,
    //     sumOfCost : 15000,
    //     orderHistoryStatus : "NEW",
    //     orderedAt : "2024-04-29 11:40"
    // },
    // {
    //     id : 18,
    //     paymentId : 11,
    //     foodName : "피자",
    //     quantity : 1,
    //     sumOfCost : 20000,
    //     orderHistoryStatus : "NEW",
    //     orderedAt : "2024-04-29 11:41"
    // },
    // {
    //     id : 19,
    //     paymentId : 11,
    //     foodName : "파스타",
    //     quantity : 2,
    //     sumOfCost : 26000,
    //     orderHistoryStatus : "NEW",
    //     orderedAt : "2024-04-29 11:42"
    // },
    // {
    //     id : 20,
    //     paymentId : 12,
    //     foodName : "스테이크",
    //     quantity : 1,
    //     sumOfCost : 35000,
    //     orderHistoryStatus : "COOKING",
    //     orderedAt : "2024-04-29 11:43"
    // },
    // {
    //     id : 21,
    //     paymentId : 12,
    //     foodName : "샐러드",
    //     quantity : 1,
    //     sumOfCost : 12000,
    //     orderHistoryStatus : "COOKING",
    //     orderedAt : "2024-04-29 11:44"
    // },
    // {
    //     id : 22,
    //     paymentId : 13,
    //     foodName : "햄버거",
    //     quantity : 3,
    //     sumOfCost : 33000,
    //     orderHistoryStatus : "COOKING",
    //     orderedAt : "2024-04-29 11:45"
    // },
    // {
    //     id : 23,
    //     paymentId : 13,
    //     foodName : "핫도그",
    //     quantity : 2,
    //     sumOfCost : 16000,
    //     orderHistoryStatus : "COOKING",
    //     orderedAt : "2024-04-29 11:46"
    // },
    // {
    //     id : 24,
    //     paymentId : 14,
    //     foodName : "김밥",
    //     quantity : 1,
    //     sumOfCost : 5000,
    //     orderHistoryStatus : "COOKING_COMPLETE",
    //     orderedAt : "2024-04-29 11:47"
    // },
    // {
    //     id : 25,
    //     paymentId : 15,
    //     foodName : "라면",
    //     quantity : 2,
    //     sumOfCost : 7000,
    //     orderHistoryStatus : "COOKING_COMPLETE",
    //     orderedAt : "2024-04-29 11:48"
    // },
    // {
    //     id : 26,
    //     paymentId : 15,
    //     foodName : "컵밥",
    //     quantity : 1,
    //     sumOfCost : 4000,
    //     orderHistoryStatus : "COOKING_COMPLETE",
    //     orderedAt : "2024-04-29 11:49"
    // },
    // {
    //     id : 27,
    //     paymentId : 16,
    //     foodName : "마라샹궈",
    //     quantity : 1,
    //     sumOfCost : 18000,
    //     orderHistoryStatus : "PAYMENT_COMPLETE",
    //     orderedAt : "2024-04-29 11:50"
    // },
    // {
    //     id : 28,
    //     paymentId : 17,
    //     foodName : "타코",
    //     quantity : 3,
    //     sumOfCost : 21000,
    //     orderHistoryStatus : "PAYMENT_COMPLETE",
    //     orderedAt : "2024-04-29 11:51"
    // },
    // {
    //     id : 29,
    //     paymentId : 18,
    //     foodName : "삼겹살",
    //     quantity : 1,
    //     sumOfCost : 25000,
    //     orderHistoryStatus : "PAYMENT_COMPLETE",
    //     orderedAt : "2024-04-29 11:52"
    // },
    // {
    //     id : 30,
    //     paymentId : 18,
    //     foodName : "불고기",
    //     quantity : 1,
    //     sumOfCost : 23000,
    //     orderHistoryStatus : "PAYMENT_COMPLETE",
    //     orderedAt : "2024-04-29 11:53"
    // },

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
];

export const employeeStatus = [
    {
        value : "WORKING",
        label : "근무중"
    },
    {
        value : "OFF_WORK",
        label : "오프"
    },
    {
        value : "VACATION",
        label : "휴가"
    },
    {
        value : "ASSISTANT_MANAGER_ATTENDANCE",
        label : "대리근무"
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

export const notificationAllData = [
    {
        id: 28,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 28, 상품: 김치찌개, 수량: 1; ",
        createdAt: "2024-05-21 13:14:22",
        read: true
    },
    {
        id: 27,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 27, 상품: 낙지볶음, 수량: 1; ",
        createdAt: "2024-05-21 13:14:14",
        read: true
    },
    {
        id: 26,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 26, 상품: 육회비빔밥, 수량: 1; ",
        createdAt: "2024-05-21 13:13:21",
        read: true
    },
    {
        id: 25,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 25, 상품: 야채비빔밥, 수량: 1; ",
        createdAt: "2024-05-21 13:13:15",
        read: true
    },
    {
        id: 24,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 24, 상품: 설렁탕, 수량: 1; ",
        createdAt: "2024-05-21 13:06:21",
        read: true
    },
    {
        id: 23,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 23, 상품: 야채비빔밥, 수량: 1; ",
        createdAt: "2024-05-21 13:06:11",
        read: true
    },
    {
        id: 22,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 22, 상품: 미역국, 수량: 1; ",
        createdAt: "2024-05-21 11:40:57",
        read: true
    },
    {
        id: 21,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 21, 상품: 육회비빔밥, 수량: 1; 상품: 야채비빔밥, 수량: 1; 상품: 오리훈제구이, 수량: 1; ",
        createdAt: "2024-05-21 11:31:02",
        read: true
    },
    {
        id: 20,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 20, 상품: 된장찌개, 수량: 1; ",
        createdAt: "2024-05-21 11:29:54",
        read: true
    },
    {
        id: 19,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 19, 상품: 육회비빔밥, 수량: 1; ",
        createdAt: "2024-05-21 11:22:52",
        read: true
    },
    {
        id: 18,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 18, 상품: 된장찌개, 수량: 1; ",
        createdAt: "2024-05-21 11:19:18",
        read: true
    },
    {
        id: 17,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 17, 상품: 된장찌개, 수량: 1; ",
        createdAt: "2024-05-21 11:15:56",
        read: true
    },
    {
        id: 16,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 16, 상품: 닭갈비, 수량: 1; ",
        createdAt: "2024-05-21 11:10:30",
        read: true
    },
    {
        id: 15,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 15, 상품: 비빔냉면, 수량: 1; ",
        createdAt: "2024-05-21 11:05:22",
        read: true
    },
    {
        id: 14,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 14, 상품: 갈비탕, 수량: 1; ",
        createdAt: "2024-05-21 11:00:15",
        read: true
    },
    {
        id: 13,
        title: "새 주문이 도착했습니다.",
        content: "주문 ID: 13, 상품: 불고기, 수량: 1; ",
        createdAt: "2024-05-21 10:55:44",
        read: true
    }
];

export const employeeData = [
    {
        id: 4,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 5,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 6,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 7,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 8,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 9,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 10,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 11,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 12,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 13,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 14,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 15,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 16,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 17,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 18,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 19,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 20,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    },
    {
        id: 21,
        name: "석해현",
        phoneNumber: "010-1111-1111",
        workDate: "월화수",
        status: "WORKING"
    }

];

export const sellData = [
    {
        "date": '06-01',
        "주문건수" : 25,
        "매출액" : 800,
    },
    {
        "date": '06-02',
        "주문건수" : 30,
        "매출액" : 967,
    },
    {
        "date": '06-03',
        "주문건수" : 29,
        "매출액" : 1098,
    },
    {
        "date": '06-04',
        "주문건수" : 37,
        "매출액" : 1200,
    },
    {
        "date": '06-05',
        "주문건수" : 42,
        "매출액" : 1108,
    },
    {
        "date": '06-06',
        "주문건수" : 11,
        "매출액" : 680,
    },
    {
        "date": '06-07',
        "주문건수" : 38,
        "매출액" : 1700,
    }
];

export const monthlySellData = [
    {
        month: '2024-06',
        orderCount : 250,
        sales : 6000,
    },
    {
        month: '2024-05',
        orderCount : 300,
        sales : 8000,
    },
    {
        month: '2024-04',
        orderCount : 280,
        sales : 7000,
    },
    {
        month: '2024-03',
        orderCount : 310,
        sales : 9000,
    }
];

export const categorySales = [
    { name: '식사', value: 400 },
    { name: '찌개', value: 300 },
    { name: '국/탕', value: 300 },
    { name: '구이', value: 200 },
    { name: '요리', value: 300 },
    { name: '음료', value: 50 },
];

export const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#00BB42', '#FF88FE'];

const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

export const reviewData = [
    {
        subject: '맛',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: '양',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: '가격',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: '분위기',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: '위생',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: '친절함',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];