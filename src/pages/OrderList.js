import React, {useEffect, useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import {monthData, orderData, orderHistoryStatus} from "../data/data"
import {TbTilde} from "../assets/icons/vander.js";
import Pagenation from "../components/Pagenation";
import Footer from "../components/Footer";

export default function OrderList(){

    const [toggle, setToggle] = useState(true);
    const [orderItem, setOrderItem] = useState([]);

      useEffect(() => {
        setOrderItem(orderData)
    }, []);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-6 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">주문 관리</h3>

                        <div className="flex justify-end">
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
                            <label className="input input-bordered flex items-center gap-2 mx-0.5 bg-neutral text-gray-50 border border-white/10">
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
                            <label className="input input-bordered flex items-center gap-2 mx-0.5 bg-neutral text-gray-50 border border-white/10">
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

                    <section className="relative top-6 mx-10 mt-8">
                        <div className="flex items-center justify-between">
                            <select className="select select-bordered select-sm w-36 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                                <option selected>최근 주문순</option>
                                <option>오래된 주문순</option>
                                <option>가격 높은 순</option>
                                <option>가격 낮은 순</option>
                            </select>
                            <select className="select select-bordered select-sm w-28 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                                <option selected>15개</option>
                                <option>30개</option>
                                <option>45개</option>
                            </select>

                        </div>
                        <div className="overflow-x-auto p-2">
                            <table className="table table-xs bg-neutral text-center text-white">
                                <thead>
                                    <tr className="h-10 border border-slate-900 text-gray-50">
                                        <th>번호</th>
                                        <th>결제아이디</th>
                                        <th>메뉴</th>
                                        <th>수량</th>
                                        <th>가격</th>
                                        <th>상태</th>
                                        <th>주문시각</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    orderItem.map((item, index) => {
                                        return (
                                            <tr key={index} className={`border border-slate-900 ${index%2===0 ? 'bg-slate-800' : 'bg-gray-600'}`}>
                                                <td>{item.id}</td>
                                                <td>{item.paymentId}</td>
                                                <td>{item.foodName}</td>
                                                <td>{item.quantity}</td>
                                                <td>{item.sumOfCost}</td>
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
                        <Pagenation />
                    </section>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}