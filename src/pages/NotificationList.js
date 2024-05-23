import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/Footer";
import {FaTrashAlt, GrPowerReset} from "../assets/icons/vander";
import {notificationAllData} from "../data/data";
import PageTitle from "../components/widgets/PageTitle";

export default function NotificationList(){

    const [toggle, setToggle] = useState(true);
    const [checkboxShow, setCheckboxShow] = useState(false);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"알림 관리"} />

                    <section className="relative top-6 mx-10 mt-8">

                        <div className="flex items-center justify-between">
                            <select className="select select-bordered select-sm w-36 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                                <option selected>상태 전체</option>
                                <option>읽음</option>
                                <option>안읽음</option>
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
                                    <th>제목</th>
                                    <th>내용</th>
                                    <th>생성시각</th>
                                    <th>상태</th>
                                </tr>
                                </thead>
                                <tbody className="text-white/85">
                                {
                                    notificationAllData.map((item, index) => {
                                        return (
                                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                                <td>
                                                    <input type="checkbox" className={`checkbox checkbox-error mx-2 ${checkboxShow ? '' : 'hidden'}`} />
                                                </td>
                                                <td>{item.id}</td>
                                                <td>{item.title}</td>
                                                <td>{item.content}</td>
                                                <td>{item.createdAt}</td>
                                                <td>{item.read ? "읽음" : "안읽음"}</td>
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

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}