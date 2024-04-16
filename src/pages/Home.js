import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";

export default function Home(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-25 mx-10">
                        <h3 className="text-4xl text-white font-bold">DashBoard</h3>
                    </div>
                </main>
            </div>
        </>
    )
}