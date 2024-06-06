import {Link} from "react-router-dom";
import {saleData} from "../../data/data";
import React from "react";

export default function RecentSalesTable({formatPrice}){
    return (
        <div className="overflow-x-auto mx-2">
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-white font-bold m-2">최근 매출액</h3>
                <Link to="/analysis" className="link mx-2 text-gray-400">리포팅 및 분석 더보기</Link>
            </div>
            <table className="table text-gray-400 table-b">
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
    )
}