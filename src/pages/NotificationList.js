import React, {useState} from "react"
import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";
import NotificationTable from "../components/table/NotificationTable";
import DeleteCheckedItem from "../components/modal/DeleteCheckedItem";
import SelectBox from "../components/widgets/SelectBox";

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
                        <SelectBox selected={"상태 전체"} options={["읽음", "안읽음"]} />
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