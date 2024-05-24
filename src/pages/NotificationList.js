import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/Footer";
import PageTitle from "../components/widgets/PageTitle";
import NotificationTable from "../components/table/NotificationTable";

export default function NotificationList(){

    const [toggle, setToggle] = useState(true);
    const [checkboxShow, setCheckboxShow] = useState(false);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"알림 관리"} checkboxShow={checkboxShow} setCheckboxShow={setCheckboxShow}/>

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

                        <NotificationTable checkboxShow={checkboxShow} />

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