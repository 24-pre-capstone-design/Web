import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import {employeeData, employeeStatus} from "../data/data"
import Pagenation from "../components/Pagenation";
import Footer from "../components/Footer";
import EditEmployee from "../components/modal/EditEmployee";
import Info from "../components/alert/Info";
import EmployeeManager from "../components/widgets/EmployeeManager";
import PageTitle from "../components/widgets/PageTitle";

export default function EmployeeList(){

    const [toggle, setToggle] = useState(true);
    const [telVisibleIndex, setTelVisibleIndex] = useState(null);
    const [employee, setEmployee] = useState({});
    const [checkboxShow, setCheckboxShow] = useState(false);
    const [message, setMessage] = useState(null);

    const showTel = (index) => {
        setTelVisibleIndex(index);
        setMessage("전화번호는 10초간 보여집니다.");
        setTimeout(() => {
            setTelVisibleIndex(null);
            setMessage(null);
        }, 10000);
    }

    const updateEmployee = (item) => {
        setEmployee(item);
        document.getElementById("updateEmployee").showModal();
    }

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="flex items-center justify-center mx-10">
                        <div className={`fixed top-20 ${!message ? 'hidden' : ''}`}>
                            <Info message={message} />
                        </div>
                    </div>

                    <PageTitle title={"직원 관리"} />

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
                                <tr className="h-11 border-t border-gray-400 text-gray-50 text-[14px]">
                                    <th className="w-10"></th>
                                    <th className="w-14">번호</th>
                                    <th>이름</th>
                                    <th>전화번호</th>
                                    <th>근무요일</th>
                                    <th>근무상태</th>
                                    <th>직원 수정</th>
                                </tr>
                                </thead>
                                <tbody className="text-white/85">
                                {
                                    employeeData.map((item, index) => {
                                        return (
                                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                                <td>
                                                    <input type="checkbox" className={`checkbox checkbox-error mx-2 ${checkboxShow ? '' : 'hidden'}`} />
                                                </td>
                                                <td>{item.id}</td>
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
                                                <td>
                                                    <button className="btn btn-xs btn-success" onClick={()=>updateEmployee(item)}>수정</button>
                                                </td>
                                            </tr>
                                    )})
                                }
                                </tbody>
                            </table>
                        </div>
                        <Pagenation />
                    </section>

                    <dialog id="deleteModal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Warning!</h3>
                            <p className="py-4">정말 삭제하시겠습니까? 메뉴 삭제 이후에는 복구가 불가능 합니다.</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn mx-0.5" onClick={()=>setCheckboxShow(false)}>취소</button>
                                    <button className="btn btn-outline btn-error mx-0.5" onClick={()=>setCheckboxShow(false)}>삭제</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <dialog id="updateEmployee" className="modal">
                        <EditEmployee item={employee} />
                    </dialog>

                    <dialog id="editEmployee" className="modal">
                        <EditEmployee />
                    </dialog>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}