import React, {useEffect, useState} from "react"
import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";
import NotificationTable from "../components/table/NotificationTable";
import DeleteCheckedItem from "../components/modal/DeleteCheckedItem";
import SelectBox from "../components/widgets/SelectBox";
import {useCookies} from "react-cookie";
import {getAllNotifications} from "../api/Notification";

export default function NotificationList(){

    const [toggle, setToggle] = useState(true);
    const [checkboxShow, setCheckboxShow] = useState(false);
    const [cookies, setCookie] = useCookies(['accessToken']);

    const [notifications, setNotifications] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const data = getAllNotifications(page,size, cookies.accessToken);
        data.then(response => {
            setNotifications(response.data?.items);
            setTotalPages(response.data.totalPages);
        });

    },[page, size]);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"알림 관리"} checkboxShow={checkboxShow} setCheckboxShow={setCheckboxShow}/>

                    <section className="relative top-6 mx-10 mt-8">
                        <SelectBox selected={"상태 전체"} options={["읽음", "안읽음"]} setSize={setSize} />
                        <NotificationTable checkboxShow={checkboxShow} notifications={notifications}/>
                        <Pagenation page={page} setPage={setPage} totalPages={totalPages} />
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