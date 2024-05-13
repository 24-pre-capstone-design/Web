import React, {useState} from "react";
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import {CgDollar, CgExternal, CgFileDocument, CgLaptop} from "react-icons/cg";
import {GrCart, LuLightbulb} from "../assets/icons/vander"

export default function Home() {
    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar />
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle} />

                    <div className="relative top-25 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">DASHBOARD</h3>

                        <div className="flex items-center mx-10">
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow w-28"
                                    placeholder="Search"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                    </div>

                    <section className="relative top-25 mt-3 mb-8 mx-6">
                        <div className="chat chat-start">
                            <div className="chat-bubble">디지털 약자를 위한 따뜻한 키오스크 시스템, Nice To Menu 입니다!</div>
                        </div>

                        <div className="stats shadow mt-5 mx-2">

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <GrCart className="inline-block w-8 h-8 stroke-current"/>
                                </div>
                                <div className="stat-title">Total Orders</div>
                                <div className="stat-value text-primary">25 건</div>
                                <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 총 주문 건 수 입니다.</div>

                            </div>

                            <div className="stat">
                                <div className="stat-title">Total Sales</div>
                                <div className="stat-value text-secondary">4,375,900 ₩</div>
                                <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 매출액 입니다.</div>
                            </div>

                        </div>

                        <div className="stats shadow mt-5 mx-2">
                            <div className="stat">
                                <div className="stat-figure text-success">
                                    <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                                </div>
                                <div className="stat-title">New Orders</div>
                                <div className="stat-value text-success">4 건</div>
                                <div className="stat-desc">새로 요청된 주문입니다.</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-accent">
                                    <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                                </div>
                                <div className="stat-title">Food On Sale</div>
                                <div className="stat-value text-accent">27 개</div>
                                <div className="stat-desc">현재 판매 중인 메뉴의 개수 입니다.</div>
                            </div>

                        </div>

                    </section>

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


