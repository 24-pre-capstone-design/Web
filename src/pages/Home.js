import React, {useEffect, useState} from "react";
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import {GrCart, LuLightbulb} from "../assets/icons/vander"
import {Link} from "react-router-dom";
import {menuData, orderData, orderHistoryStatus, saleData} from "../data/data";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../components/Footer";
import CountUp from "react-countup";

export default function Home() {

    const [toggle, setToggle] = useState(true);
    const [orderItem5, setOrderItem5] = useState([]);
    const [menuItem5, setMenuItem5] = useState([])

    useEffect(() => {
        setOrderItem5(orderData.slice(0, 5));
        setMenuItem5(menuData.slice(0,5));
    }, []);

    const formatPrice = (price) => {
        return "₩ " +  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    const settings = {
        dots: false,
        arrows : false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-6 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">DASHBOARD</h3>

                        <div className="flex items-center mx-10">
                            <label data-theme="dark" className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow w-28"
                                    placeholder="Search"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </label>
                        </div>
                    </div>

                    <section className="relative top-6 mt-3 mb-8 mx-6">
                        <div className="chat chat-start">
                            <div className="chat-bubble">디지털 약자를 위한 따뜻한 키오스크 시스템, Nice To Menu 입니다!</div>
                        </div>

                        <div data-theme="dark" className="stats shadow mt-5 mx-2" >

                            <div className="stat">
                                <div className="stat-figure text-primary">
                                    <GrCart className="inline-block w-8 h-8 stroke-current"/>
                                </div>
                                <div className="stat-title">Total Orders</div>
                                <div className="stat-value text-primary text-3xl"><CountUp start={1} end={25} /> 건</div>
                                <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 총 주문 건
                                    수 입니다.
                                </div>

                            </div>

                            <div className="stat">
                                <div className="stat-title">Total Sales</div>
                                <div className="stat-value text-secondary text-3xl">{formatPrice(4375900)}</div>
                                <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 매출액
                                    입니다.
                                </div>
                            </div>

                        </div>

                        <div data-theme="dark" className="stats shadow mt-5 mx-2">
                            <div className="stat">
                                <div className="stat-figure text-success">
                                    <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                                </div>
                                <div className="stat-title">New Orders</div>
                                <div className="stat-value text-success text-3xl"><CountUp start={1} end={7} duration={3}/> 건</div>
                                <div className="stat-desc">새로 요청된 주문입니다.</div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure text-accent">
                                    <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                                </div>
                                <div className="stat-title">Food On Sale</div>
                                <div className="stat-value text-accent text-3xl"><CountUp start={1} end={27} /> 개</div>
                                <div className="stat-desc">현재 판매 중인 메뉴의 개수 입니다.</div>
                            </div>
                        </div>

                        <div className="divider divider-neutral mt-8 mb-3"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            <div className="overflow-x-auto mx-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl text-white font-bold m-2">최근 주문내역</h3>
                                    <Link to="/order" className="link mx-2 text-gray-400">주문내역 더보기</Link>
                                </div>
                                <table className="table text-gray-400">
                                    <thead className="text-gray-400">
                                    <tr className="border-none">
                                        <th></th>
                                        <th>메뉴</th>
                                        <th>가격</th>
                                        <th>상태</th>
                                        <th>주문시각</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-white/70">
                                    {
                                        orderItem5.map((order, index) => (

                                        <tr key={index} className="border-t border-gray-800">
                                            <td>{index + 1}</td>
                                            <td>{order.foodName}</td>
                                            <td>{formatPrice(order.sumOfCost)}</td>
                                            <td>{
                                                orderHistoryStatus.map((status, index) => {
                                                    if (status.value === order.orderHistoryStatus) {
                                                        return status.label
                                                    }
                                                })
                                            }</td>
                                            <td>{order.orderedAt}</td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="overflow-x-auto mx-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl text-white font-bold m-2">최근 매출액</h3>
                                    <Link to="/menu" className="link mx-2 text-gray-400">리포팅 및 분석 더보기</Link>
                                </div>
                                <table className="table text-gray-400 table-b">
                                    {/* head */}
                                    <thead className="text-gray-400">
                                    <tr className="border-none">
                                        <th></th>
                                        <th>주문건수</th>
                                        <th>매출액</th>
                                        <th>날짜</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-white/70">
                                    {
                                        saleData.map((sale, index) => (

                                            <tr key={index} className="border-t border-gray-800">
                                                <td>{index + 1}</td>
                                                <td>{sale.order}</td>
                                                <td>{formatPrice(sale.sale)}</td>
                                                <td>{sale.date}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="divider divider-neutral mt-8"></div>

                        <div className="mt-6 pb-6">
                            <div className="flex items-center justify-between mx-6 mb-6">
                                <h3 className="text-xl text-white font-bold">인기 메뉴</h3>
                                <Link to="/menu" className="link mx-2 text-gray-400">메뉴 더보기</Link>
                            </div>
                            <Slider {...settings} className="pb-6">
                                {
                                    menuItem5.map((item, index) => (
                                        <div className="px-4">
                                        <div data-theme="dark" className="card card-compact w-96 bg-base-100 shadow-xl" key={item.id}>
                                            <figure><img src={item.pictureURL} alt=""/></figure>
                                            <div className="card-body">
                                                <h2 className="card-title justify-between">
                                                    <div>
                                                        {item.name}
                                                        <div className="badge badge-accent badge-outline align-middle mb-1 mx-2">{item.foodCategory}</div>
                                                        <div className="badge badge-warning badge-outline align-middle mb-1">{item.status}</div>
                                                    </div>
                                                </h2>
                                                <p>{item.price}원</p>
                                            </div>
                                        </div>
                                        </div>
                                    ))
                                }
                            </Slider>
                        </div>

                    </section>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    );
}