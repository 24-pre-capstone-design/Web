import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import React, {useEffect, useState} from "react";
import Footer from "../components/widgets/Footer";
import DeleteAccount from "../components/modal/DeleteAccount";
import EditOwnerInfo from "../components/modal/EditOwnerInfo";
import UpdatePassword from "../components/modal/UpdatePassword";
import PageTitle from "../components/PageManager/PageTitle";
import HelloMyPage from "../components/widgets/HelloMyPage";
import MyInfoTable from "../components/table/MyInfoTable";
import RecentNotificationTable from "../components/table/RecentNotificationTable";
import {getOwner} from "../api/Owner";

export default function MyPage(){

    const [toggle, setToggle] = useState(true);
    const [owner, setOwner] = useState({});

    useEffect(() => {
        const response = getOwner('mingmingmon');
        response.then((data) => {
            setOwner(data.data);
        });
    }, []);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"MY PAGE"} />

                    <section className="relative top-6 mt-3 mx-6">
                        <HelloMyPage owner={owner}/>
                        <div className="divider divider-neutral mt-8 mb-3"></div>
                        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10">
                            <MyInfoTable owner={owner}/>
                            <RecentNotificationTable/>
                        </div>
                    </section>

                    <DeleteAccount />
                    <EditOwnerInfo owner={owner}/>
                    <UpdatePassword />

                    <div className="Fixed bottom-0 w-full">
                        <Footer/>
                    </div>
                </main>
            </div>
        </>
    )
}