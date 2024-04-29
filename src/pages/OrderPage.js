import React, {useEffect, useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import {category, monthData, orders} from "../data/data"
import {TbTilde} from "../assets/icons/vander.js";

export default function OrderPage(){

    const [toggle, setToggle] = useState(true);
    const [orderItem, setOrderItem] = useState([]);
      useEffect(() => {
        setOrderItem(orders)
    }, []);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentOrders = orders.slice(indexOfFirstItem,indexOfLastItem);
    const totalPageCount = Math.ceil(orders.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderOrders = () => {
        const renderedOrders = [];
        currentOrders.forEach((order, index) => {
            renderedOrders.push(
                <React.Fragment key={order.id}>
                    <tr>
                        <td className="p-3 text-sm font-bold">{order.id}</td>
                        <td className="p-3 text-sm text-gray-700">{order.menu}</td>
                        <td className="p-3 text-sm text-gray-700">{order.date}</td>
                        <td className="p-3 text-sm text-gray-700">{order.price}</td>
                        <td className="p-3 text-sm text-gray-700">
                            <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-red-200 rounded-lg bg-opacity-40">{order.status}</span>
                        </td>
                    </tr>
                    {index !== currentOrders.length - 1 && (
                        <tr key={`line${order.id}`} className="border-t border-gray-600">
                            <td colSpan="5" className="text-center"></td>
                        </tr>
                    )}
                </React.Fragment>
            );
        });
        return renderedOrders;
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage = 1;
        if (currentPage > 5) {
            startPage = currentPage - 4;
        }
        const endPage = Math.min(startPage + 4, totalPageCount);
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }
        return (
            <div className="flex mt-4">
                <button
                    className={`text-lg font-semibold mx-2 px-4 py-2 rounded-lg focus:outline-none ${currentPage === 1 ? 'bg-gray-300 text-gray-700' : 'bg-gray-800 text-white'}`}
                    disabled={currentPage === 1}
                    onClick={() => handleClick(currentPage - 1)}
                >
                    이전
                </button>

                {pageNumbers.map((number) => (
                    <button
                        className={`text-lg font-semibold mx-2 px-4 py-2 rounded-lg focus:outline-none ${currentPage === number ? 'bg-gray-800 text-white' : 'bg-gray-200 text-white'}`}
                        key={number}
                        onClick={() => handleClick(number)}
                    >
                        {number}
                    </button>
                ))}

                <button
                    className={`text-lg font-semibold mx-2 px-4 py-2 rounded-lg focus:outline-none ${currentPage === totalPageCount ? 'bg-gray-300 text-gray-700' : 'bg-gray-800 text-white'}`}
                    disabled={currentPage === totalPageCount}
                    onClick={() => handleClick(currentPage + 1)}
                >
                    다음
                </button>
            </div>
        );
    };

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-25 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">주문 관리</h3>

                        <div className="flex justify-end">
                            <select className="select select-bordered w-28 max-w-xs mx-0.5">
                                <option selected>상태 전체</option>
                                <option>신규</option>
                                <option>준비중</option>
                                <option>완료</option>
                            </select>
                            <select className="select select-bordered w-36 max-w-xs mx-0.5">
                                <option selected>최근 주문순</option>
                                <option>오래된 주문순</option>
                                <option>가격 높은 순</option>
                                <option>가격 낮은 순</option>
                            </select>
                            <select className="select select-bordered w-28 max-w-xs mx-0.5">
                                <option selected>기간 전체</option>
                                {
                                    monthData.map((item, index) => (
                                        <option key={index} value={item.month}>{item.month}</option>
                                    ))
                                }
                            </select>
                            <label className="input input-bordered flex items-center gap-2 mx-0.5">
                                <input
                                    type="date"
                                    className="grow w-32"
                                    placeholder="Search"
                                />
                                <TbTilde />
                                <input
                                    type="date"
                                    className="grow w-32"
                                    placeholder="Search"
                                />
                            </label>
                            <label className="input input-bordered flex items-center gap-2 mx-0.5">
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
                    <div className="relative top-25 mx-10 mt-8">
                        <div class="pt-4 h-screen flex flex-col items-center">
                            <table class="w-full bg-gray-800 text-white">
                                <thead class="border-b-2 border-gray-800">
                                    <tr class="">
                                        <th class="w-12 p-3 text-sm font-semibold tracking-wide text-left">번호</th>
                                        <th class="w-40 p-3 text-sm font-semibold tracking-wide text-left">메뉴</th>
                                        <th class="w-40 p-3 text-sm font-semibold tracking-wide text-left">주문 일시</th>
                                        <th class="w-14 p-3 text-sm font-semibold tracking-wide text-left">가격</th>
                                        <th class="w-14 p-3 text-sm font-semibold tracking-wide text-left">상태</th>
                                    </tr>
                                </thead>
                                <tbody className="border-t border-gray-600">
                                    {renderOrders()}
                                </tbody>
                            </table>
                                {renderPageNumbers()}
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}