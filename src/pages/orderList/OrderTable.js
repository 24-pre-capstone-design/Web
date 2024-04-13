import React, { useState } from "react"

//추후에 컴포넌트 분리예정
const OrderTable = () => {
    const orders = [
        { id: 1, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '신규', price: 15000 },
        { id: 2, menu: '왕돈까스', date: '2024-03-29 18:00', status: '신규', price: 25000 },
        { id: 3, menu: '김치우동', date: '2024-03-29 18:00', status: '준비중', price: 15000 },
        { id: 4, menu: '왕돈까스, 김치우동', date: '2024-03-29 18:00', status: '신규', price: 15000 },
    ];

    const [pageNation, setPageNation] = useState(1);
    
    return(
        <div class="pt-6 h-screen">
            <table class="w-full">
                <thead class="bg-gray-50 border-b-2 border-gray-800 ">
                    <tr class="">
                        <th class="w-12 p-3 text-sm font-semibold tracking-wide text-left">번호</th>
                        <th class="w-40 p-3 text-sm font-semibold tracking-wide text-left">메뉴</th>
                        <th class="w-40 p-3 text-sm font-semibold tracking-wide text-left">주문 일시</th>
                        <th class="w-14 p-3 text-sm font-semibold tracking-wide text-left">가격</th>
                        <th class="w-14 p-3 text-sm font-semibold tracking-wide text-left">상태</th>
                    </tr>
                </thead>
                <tbody class="bg-white">
                    {orders.map(order => (
                        <tr key = {order.id}>
                            <td class="p-3 text-sm font-bold">{order.id}</td>
                            <td class="p-3 text-sm text-gray-700">{order.menu}</td>
                            <td class="p-3 text-sm text-gray-700">{order.date}</td>
                            <td class="p-3 text-sm text-gray-700">{order.price}</td>
                            <td class="p-3 text-sm text-gray-700">
                                <span class="p-1.5 text-xs font-medium uppercase tracking-wider text-yellow-800 bg-red-200 rounded-lg bg-opacity-40">{order.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {<div>
                {[1,2,3,4,5].map(buttonNumber => (
                    <button className="text-4xl text-white font-bold" key = {buttonNumber} onClick={()=> setPageNation(buttonNumber)}>
                        {buttonNumber}
                    </button>
                ))}
            </div> }
        </div>
    );
};

export default OrderTable;