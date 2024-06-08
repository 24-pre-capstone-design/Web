import {orderHistoryStatus} from "../../data/data";
import React from "react";

export default function OrderTable({OrderHistory}) {

    return (
        <div className="overflow-x-auto p-2">
            <table className="table text-center mt-2">
                <thead>
                <tr className="h-10 border-t border-gray-400 text-gray-50">
                    <th>결제아이디</th>
                    <th>메뉴</th>
                    <th>수량</th>
                    <th>가격</th>
                    <th>상태</th>
                    <th>주문시각</th>
                </tr>
                </thead>
                <tbody className="text-white/85">
                {
                    OrderHistory.map((item, index) => {
                        return (
                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                <td>{item?.paymentId}</td>
                                <td>
                                    {
                                        item.orderResponseDtoList.map((menu, index) => menu.foodName).join(' / ')
                                    }
                                </td>
                                <td>
                                    {
                                        item.orderResponseDtoList.map((menu, index) => menu.quantity).join(' / ')
                                    }
                                </td>
                                <td>{item.sumOfOrderHistoryCost}</td>
                                <td>{
                                    orderHistoryStatus.map((status, index) => {
                                        if (status.value === item.orderHistoryStatus) {
                                            return status.label
                                        }
                                    })
                                }</td>
                                <td>{item.orderedAt}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}