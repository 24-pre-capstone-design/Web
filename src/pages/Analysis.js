import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import React, {useState} from "react";
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";
import PopularMenuTable from "../components/table/PopularMenuTable";
import SalesChart from "../components/chart/SalesChart";
import MonthlySalesTable from "../components/table/MonthlySalesTable";
import CategorySalesChart from "../components/chart/CategorySalesChart";
import ReviewChart from "../components/chart/ReviewChart";

export default function Analysis() {

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"ANALYSIS"} />

                    <section className="relative top-6 mt-6 mb-10 mx-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            <PopularMenuTable />
                            <SalesChart />
                        </div>

                        <div className="divider divider-neutral mt-8"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">
                            <MonthlySalesTable />
                            <CategorySalesChart />
                            <ReviewChart />
                        </div>
                    </section>

                    <div className="relative top-25">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    );
}