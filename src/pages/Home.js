import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import Content from "./dashboard/Content";

export default function Home(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-25 mx-10">
                        <div className="dashboard--content">
                            <Content/>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}