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


export const orders = [
        { id: 1, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '신규', price: 15000 },
        { id: 2, menu: '왕돈까스', date: '2024-03-29 18:00', status: '신규', price: 25000 },
        { id: 3, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 4, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 5, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 6, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 7, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 8, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 9, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 10, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 11, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 12, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 13, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 14, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 15, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 16, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 1, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '신규', price: 15000 },
        { id: 2, menu: '왕돈까스', date: '2024-03-29 18:00', status: '신규', price: 25000 },
        { id: 3, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 20, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 5, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 6, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 7, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 8, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 9, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 10, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 11, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 12, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 13, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 30, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 15, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 16, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 1, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '신규', price: 15000 },
        { id: 2, menu: '왕돈까스', date: '2024-03-29 18:00', status: '신규', price: 25000 },
        { id: 3, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 4, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 5, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 6, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 7, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 40, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 9, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 10, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 11, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 12, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 13, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 14, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 15, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 16, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 1, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '신규', price: 15000 },
        { id: 50, menu: '왕돈까스', date: '2024-03-29 18:00', status: '신규', price: 25000 },
        { id: 3, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 4, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 5, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 6, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 7, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 8, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 9, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 10, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 11, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 60, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
         { id: 13, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 14, menu: '왕돈까스', date: '2024-03-29 18:00', status: '완료', price: 25000 },
        { id: 15, menu: '김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
        { id: 70, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
    ];
