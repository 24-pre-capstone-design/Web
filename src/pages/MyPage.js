import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import React, {useState} from "react";

export default function MyPage(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-6 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">마이페이지</h3>

                    </div>

                </main>

            </div>
        </>
    )
}