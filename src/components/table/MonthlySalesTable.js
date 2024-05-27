import {monthlySellData} from "../../data/data";
import React from "react";

export default function MonthlySalesTable () {
    return (
        <div className="overflow-x-auto mx-2">
            <div className="flex items-center">
                <h3 className="text-xl text-white font-bold m-2">월별 매출액</h3>
            </div>
            <table className="table text-center mt-2">
                <thead>
                <tr className="h-11 border-t border-gray-400 text-gray-50 text-[14px]">
                    <th>월</th>
                    <th>매출액(만원)</th>
                    <th>주문건수</th>
                </tr>
                </thead>
                <tbody className="text-white/85">
                {
                    monthlySellData.map((data, index) => (
                        <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                            <td>{data.month}</td>
                            <td>{data.sales}</td>
                            <td>{data.orderCount}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}