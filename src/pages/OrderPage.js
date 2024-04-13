import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import OrderTable from "./orderList/OrderTable";
import OrderDate from "./orderList/OrderDate";

export default function OrderPage(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-25 mx-10">
                        <h3 className="text-4xl text-white font-bold">주문건 관리</h3>
                    </div>
                    <div className="relative top-25 mx-10">
                        <OrderDate/>
                        <OrderTable/>
                    </div>
                </main>
            </div>
        </>
    )
}