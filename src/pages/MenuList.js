import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import React, {useState} from "react";

export default function MenuList() {

    const [toggle, setToggle] = useState(true);

    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                </main>
            </div>
        </>
    )
}