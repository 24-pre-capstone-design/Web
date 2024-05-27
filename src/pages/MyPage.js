import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {notificationData} from "../data/data";
import Footer from "../components/widgets/Footer";
import DeleteAccount from "../components/modal/DeleteAccount";
import EditOwnerInfo from "../components/modal/EditOwnerInfo";
import UpdatePassword from "../components/modal/UpdatePassword";
import PageTitle from "../components/PageManager/PageTitle";
import HelloMyPage from "../components/widgets/HelloMyPage";
import MyInfoTable from "../components/table/MyInfoTable";
import RecentNotificationTable from "../components/table/RecentNotificationTable";

export default function MyPage(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"MY PAGE"} />

                    <section className="relative top-6 mt-3 mx-6">
                        <HelloMyPage/>
                        <div className="divider divider-neutral mt-8 mb-3"></div>
                        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10">
                            <MyInfoTable/>
                            <RecentNotificationTable/>
                        </div>
                    </section>

                    <DeleteAccount />
                    <EditOwnerInfo />
                    <UpdatePassword />

                    <div className="relative top-75">
                        <Footer/>
                    </div>
                </main>
            </div>
        </>
    )
}