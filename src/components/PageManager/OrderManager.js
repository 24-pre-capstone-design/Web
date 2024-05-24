import {monthData} from "../../data/data";
import {TbTilde} from "../../assets/icons/vander";
import React from "react";

export default function OrderManager(){
    return(
        <>
            <select className="select select-bordered w-28 max-w-xs mx-0.5 bg-neutral text-gray-50 border border-white/10">
                <option selected>상태 전체</option>
                <option>신규주문</option>
                <option>조리중</option>
                <option>조리완료</option>
                <option>결제완료</option>
            </select>
            <select className="select select-bordered w-28 max-w-xs mx-0.5 bg-neutral text-gray-50 border border-white/10">
                <option selected>기간 전체</option>
                {
                    monthData.map((item, index) => (
                        <option key={index} value={item.month}>{item.month}</option>
                    ))
                }
            </select>
            <label className="input input-bordered flex items-center gap-2 mx-2 bg-neutral text-gray-50 border border-white/10">
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
        </>
    )
}