import {Link} from "react-router-dom";
import {orderData, orderHistoryStatus} from "../../data/data";
import React from "react";

export default function RecentOrdersTable({formatPrice}){
    return (
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
                    orderData.slice(0, 5).map((order, index) => (

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
    )
}