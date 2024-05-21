import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import {employeeData, employeeStatus, orderHistoryStatus} from "../data/data"
import Pagenation from "../components/Pagenation";
import Footer from "../components/Footer";
import Info from "../components/alert/Info";

export default function EmployeeList(){

    const [toggle, setToggle] = useState(true);
    const [telVisibleIndex, setTelVisibleIndex] = useState(null);

    const showTel = (index) => {
        setTelVisibleIndex(index);
        setTimeout(() => {
            setTelVisibleIndex(null);
        }, 10000);
    }

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-6 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">직원 관리</h3>

                        <div className="flex items-center">
                            <button className="btn btn-neutral">직원 추가하기</button>
                            <button className="btn btn-neutral text-error mx-2">직원 삭제하기</button>
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
                                <option selected>상태 전체</option>
                                <option>근무중</option>
                                <option>오프</option>
                                <option>휴가</option>
                                <option>대리근무</option>
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
                                    <th>이름</th>
                                    <th>전화번호</th>
                                    <th>근무요일</th>
                                    <th>상태</th>
                                </tr>
                                </thead>
                                <tbody className="text-white/85">
                                {
                                    employeeData.map((item, index) => (
                                        <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                            <td>{index+1}</td>
                                            <td>{item.name}</td>
                                            <td>
                                                {
                                                    telVisibleIndex === index ? item.phoneNumber :
                                                        <>
                                                            <button
                                                                className="btn btn-xs btn-active"
                                                                onClick={()=>showTel(index)}>전화번호 보기</button>
                                                        </>
                                                }
                                            </td>
                                            <td>{item.workDate}</td>
                                            <td>{
                                                employeeStatus.map((status, index) => {
                                                    if (status.value === item.status) {
                                                        return status.label
                                                    }
                                                })
                                            }</td>
                                        </tr>
                                    ))
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