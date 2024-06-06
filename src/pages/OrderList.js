import React, {useEffect, useState} from "react"
import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";
import OrderTable from "../components/table/OrderTable";
import SelectBox from "../components/widgets/SelectBox";
import {getOrderHistoryByLatest} from "../api/OrderHistory";
import {useCookies} from "react-cookie";

export default function OrderList(){

    const [toggle, setToggle] = useState(true);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(15);
    const [totalPages, setTotalPages] = useState(0);
    const [orderHistory, setOrderHistory] = useState([]);

    const [cookie, setCookie] = useCookies(['accessToken']);

    useEffect(() => {
        try {
            getOrderHistoryByLatest(page, size, cookie.accessToken).then((response) => {
                setOrderHistory(response.data.items);
                setTotalPages(response.data.totalPages);
            });
        } catch (error) {
            console.error("Error fetching all notifications:", error);
        }
    }, [page, size]);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"주문 관리"} />

                    <section className="relative top-6 mx-10 mt-8">
                        <SelectBox selected={"최근 주문순"} options={["오래된 주문순", "가격 높은 순", "가격 낮은 순"]} setSize={setSize}/>
                        <OrderTable OrderHistory={orderHistory} />
                        <Pagenation page={page} setPage={setPage} totalPages={totalPages}/>
                    </section>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}