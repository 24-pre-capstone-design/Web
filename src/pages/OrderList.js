import React, {useEffect, useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import {orderData, orderHistoryStatus} from "../data/data"
import Pagenation from "../components/Pagenation";
import Footer from "../components/Footer";
import PageTitle from "../components/widgets/PageTitle";

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

                    <PageTitle title={"주문 관리"} />

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
                            <table className="table text-center mt-2">
                                <thead>
                                    <tr className="h-10 border-t border-gray-400 text-gray-50">
                                        <th>번호</th>
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
                                    orderItem.map((item, index) => {
                                        return (
                                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
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