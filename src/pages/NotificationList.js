import React, {useState} from "react"
import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";
import NotificationTable from "../components/table/NotificationTable";
import DeleteCheckedItem from "../components/modal/DeleteCheckedItem";

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

                    <DeleteCheckedItem setCheckboxShow={setCheckboxShow}/>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}