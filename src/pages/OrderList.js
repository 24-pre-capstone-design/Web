import React, {useState} from "react"
import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/Footer";
import PageTitle from "../components/widgets/PageTitle";
import OrderTable from "../components/table/OrderTable";

export default function OrderList(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"주문 관리"} />

                    <section className="relative top-6 mx-10 mt-8">
                        <div className="flex items-center justify-between">
                            <select className="select select-bordered select-sm w-36 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                                <option selected>최근 주문순</option>
                                <option>오래된 주문순</option>
                                <option>가격 높은 순</option>
                                <option>가격 낮은 순</option>
                            </select>
                            <select className="select select-bordered select-sm w-28 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                                <option selected>15개</option>
                                <option>30개</option>
                                <option>45개</option>
                            </select>

                        </div>
                        <OrderTable />
                        <Pagenation />
                    </section>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}