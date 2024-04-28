import React, { useState } from "react";
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import { BiSearch } from "react-icons/bi";
import { CgCalendarDates, CgClipboard, CgDollar, CgExternal, CgFileDocument, CgLaptop } from "react-icons/cg";

export default function Home() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="relative top-25 mx-10">
                        <div className="dashboard--content">
                            <div>
                                <div className="content--header flex justify-between items-center">
                                    <div className="header--title text-white text-3xl font-bold">
                                        <h3>DashBoard</h3>
                                        <h7 className="header--subtitle text-sm font-light">스마트 키오스크 대시보드</h7>
                                    </div>

                                    <div className="header--activity flex gap-4 items-center">
                                        <div className="search-box bg-gray-800 rounded-lg flex items-center">
                                            <input type="text" placeholder="SEARCH" className="bg-transparent border-none outline-none p-2" />
                                            <BiSearch className="icon text-white text-lg cursor-pointer transition-transform hover:scale-110" />
                                        </div>
                                    </div>
                                </div>
                                <div className="dashboard--List flex gap-20 items-center mt-8">
                                    <div className="card--left flex-1">
                                        <div className="card--container flex flex-wrap gap-20 items-start">
                                            {firstLine.map((item, index) => (
                                                <div key={index} className="card bg-gray-700 text-white p-4 w-72 rounded-lg flex flex-col items-start justify-center">
                                                    <div className="flex items-center">
                                                        <div className="card--icon mr-2">{item.icon}</div>
                                                        <div className="card--title text-xl">{item.title}</div>
                                                    </div>
                                                    <div className="card--content text-lg text-center mt-2">{item.content}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="card--container flex flex-wrap gap-20 items-start">
                                            {secondLine.map((item, index) => (
                                                <div key={index} className="card bg-gray-700 text-white p-4 w-72 rounded-lg flex flex-col items-start justify-center">
                                                    <div className="flex items-center">
                                                        <div className="card--icon mr-2">{item.icon}</div>
                                                        <div className="card--title text-xl">{item.title}</div>
                                                    </div>
                                                    <div className="card--content text-lg text-center mt-2">{item.content}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="card--container">
                                            <div className="card--1 bg-gray-700 text-white p-4 w-72 rounded-lg">
                                                <div className="list--header flex items-center">
                                                    <div className="card--icon"><CgClipboard size="24" /></div>
                                                    <div className="card--title text-xl">상품목록</div>
                                                </div>

                                                <div className="list--container bg-gray-700">
                                                    {product.map((menu, index) => (
                                                        <div key={index} className="list flex justify-between">
                                                            <span>{menu.num}</span>
                                                            <span>{menu.name}</span>
                                                            <span>{menu.price}</span>
                                                            <span>{menu.state}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card--container">
                                            <div className="card--1 bg-gray-700 text-white p-4 w-72 rounded-lg">
                                                <div className="list--header flex items-center">
                                                    <div className="card--icon"><CgCalendarDates size="24" /></div>
                                                    <div className="card--title text-xl">일 매출액</div>
                                                </div>

                                                <div className="list--container bg-gray-700">
                                                    {orderlist.map((profit, index) => (
                                                        <div key={index} className="list flex justify-between">
                                                            <span>{profit.order_num}</span>
                                                            <span>{profit.name}</span>
                                                            <span>{profit.num}</span>
                                                            <span>{profit.price}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card--right flex-1">
                                        <div className="card--2 bg-gray-700 text-white p-4 w-96 rounded-lg">
                                            <div className="card--title text-xl">오늘의 메뉴</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

const firstLine = [
    {
        title: "누적 주문량",
        icon: <CgLaptop size="36" />,
        content: "1,698 회"
    },
    {
        title: "월 매출액",
        icon: <CgDollar size="36" />,
        content: "39,410,958 원"
    },
];
const secondLine = [
    {
        title: "신규주문건",
        icon: <CgExternal size="36" />,
        content: "4 건"
    },
    {
        title: "진행 중 프로모션",
        icon: <CgFileDocument size="32" />,
        content: "3 건"
    },
];

const product = [
    {
        num: "상품번호",
        name: "메뉴",
        price: "판매가격",
        state: "상태"
    },
    {
        num: 1,
        name: "한돈생삼겹살",
        price: "17,000",
        state: "판매 중"
    },
    {
        num: 2,
        name: "한돈너비목살",
        price: "17,000",
        state: "판매 중"
    },
    {
        num: 3,
        name: "한돈등꽃살",
        price: "18,000",
        state: "판매 중"
    }
]

const orderlist = [
    {
        order_num: "주문번호",
        name: "메뉴",
        num: "수량",
        price: "금액"
    },
    {
        order_num: "1000",
        name: "한돈생삼겹살",
        num: "3",
        price:"51,000"
    },
    {
        order_num:"999",
        name:"한돈너비목살",
        num:"4",
        price:"68,000"
    },
    {
        order_num:"998",
        name:"이슬소주",
        num:"3",
        price:"15,000"
    }
]


