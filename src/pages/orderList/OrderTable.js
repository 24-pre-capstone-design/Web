import React, { useState } from "react"

//추후에 컴포넌트 분리예정
const OrderTable = () => {
    const orders = [
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
        { id: 70, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '완료', price: 15000 },
    ];

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
    );
};

export default OrderTable;