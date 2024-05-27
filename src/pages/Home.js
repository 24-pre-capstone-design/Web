import React, {useState} from "react";
import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";
import HomeStats from "../components/widgets/HomeStats";
import RecentOrdersTable from "../components/table/RecentOrdersTable";
import RecentSalesTable from "../components/table/RecentSalesTable";
import HomeMenuSlider from "../components/widgets/HomeMenuSlider";

export default function Home() {

    const [toggle, setToggle] = useState(true);
    const formatPrice = (price) => {
        return "₩ " +  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };

    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"DASHBOARD"} />

                    <section className="relative top-6 mt-3 mb-8 mx-6">
                        <div className="chat chat-start">
                            <div className="chat-bubble">디지털 약자를 위한 따뜻한 키오스크 시스템, Nice To Menu 입니다!</div>
                        </div>
                        <HomeStats formatPrice={formatPrice}/>
                        <div className="divider divider-neutral mt-8 mb-3"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            <RecentOrdersTable formatPrice={formatPrice} />
                            <RecentSalesTable formatPrice={formatPrice} />
                        </div>
                        <div className="divider divider-neutral mt-8"></div>
                        <div className="mt-6 pb-6">
                            <HomeMenuSlider />
                        </div>
                    </section>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    );
}