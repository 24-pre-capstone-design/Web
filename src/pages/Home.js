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
                        <h3 className="text-4xl text-white font-bold border border-red-600">DashBoard</h3>

                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                        </label>
                        <button className="btn btn-info">Info</button>
                        <button className="btn btn-success">Success</button>
                        <button className="btn btn-warning">Warning</button>
                        <button className="btn btn-error">Error</button>
                    </div>
                </main>
            </div>
        </>
    )
}