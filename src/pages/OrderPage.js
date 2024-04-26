import React, {useEffect, useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import { orders } from "../data/data"

export default function OrderPage(){
    const [toggle, setToggle] = useState(true);
    const [orderItem, setOrderItem] = useState([]);
      useEffect(() => {
        setOrderItem(orders)
    }, []);

    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPageCount = Math.ceil(orders.length / itemsPerPage);

    const handleClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderOrders = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const renderedOrders = orderItem.slice(startIndex, endIndex).map((order, index) => (
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
                {index !== orderItem.length - 1 && (
                    <tr key={`line${order.id}`} className="border-t border-gray-600">
                        <td colSpan="5" className="text-center"></td>
                    </tr>
                )}
            </React.Fragment>
        ));

        return renderedOrders;
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        let startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(startPage + 4, totalPageCount);

        const prevPageButton = (
            <button
                className={`text-lg font-semibold mx-2 px-4 py-2 rounded-lg focus:outline-none ${currentPage === 1 ? 'bg-gray-300 text-gray-700' : 'bg-gray-800 text-white'}`}
                disabled={currentPage === 1}
                onClick={() => handleClick(currentPage - 1)}
            >
                이전
            </button>
        );

        const nextPageButton = (
            <button
                className={`text-lg font-semibold mx-2 px-4 py-2 rounded-lg focus:outline-none ${currentPage === totalPageCount ? 'bg-gray-300 text-gray-700' : 'bg-gray-800 text-white'}`}
                disabled={currentPage === totalPageCount}
                onClick={() => handleClick(currentPage + 1)}
            >
                다음
            </button>
        );

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    className={`text-lg font-semibold mx-2 px-4 py-2 rounded-lg focus:outline-none ${currentPage === i ? 'bg-gray-800 text-white' : 'bg-gray-200 text-white'}`}
                    key={i}
                    onClick={() => handleClick(i)}
                >
                    {i}
                </button>
            );
        }

        if (pageNumbers.length < 5 && startPage > 1) {
            const diff = 5 - pageNumbers.length;
            for (let i = startPage - 1; i >= Math.max(1, startPage - diff); i--) {
                pageNumbers.unshift(
                    <button
                        className={`text-lg font-semibold mx-2 px-4 py-2 rounded-lg focus:outline-none bg-gray-200 text-white`}
                        key={i}
                        onClick={() => handleClick(i)}
                    >
                        {i}
                    </button>
                );
            }
        }
        return (
            <div className="flex mt-4">
                {currentPage > 1 && prevPageButton}
                {pageNumbers}
                {currentPage < totalPageCount && nextPageButton}
            </div>
        );
    };  


    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-25 mx-10">
                        <h3 className="text-4xl text-white font-bold">주문건 관리</h3>
                    </div>
                    <div className="relative top-25 mx-10">
                        <div className="flex justify-end pt-6 rounded-lg focus:outline-none ">
                            <input type="date" className="p-2 mr-2 bg-gray-800 text-white"></input>
                            <h5 className="p-2 bg-gray-800 text-white"> ~ </h5>
                            <input type="date" className="p-2 bg-gray-800 text-white"></input>
                        </div>
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