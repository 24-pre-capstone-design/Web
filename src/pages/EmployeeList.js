import React, {useState} from "react"
import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import Pagenation from "../components/widgets/Pagenation";
import Footer from "../components/widgets/Footer";
import EditEmployee from "../components/modal/EditEmployee";
import Info from "../components/alert/Info";
import PageTitle from "../components/PageManager/PageTitle";
import EmployeeTable from "../components/table/EmployeeTable";
import DeleteCheckedItem from "../components/modal/DeleteCheckedItem";
import SelectBox from "../components/widgets/SelectBox";

export default function EmployeeList(){

    const [toggle, setToggle] = useState(true);
    const [telVisibleIndex, setTelVisibleIndex] = useState(null);
    const [checkboxShow, setCheckboxShow] = useState(false);
    const [message, setMessage] = useState(null);

    const showTel = (index) => {
        setTelVisibleIndex(index);
        setMessage("전화번호는 10초간 보여집니다.");
        setTimeout(() => {
            setTelVisibleIndex(null);
            setMessage(null);
        }, 10000);
    }

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="flex items-center justify-center mx-10">
                        <div className={`fixed top-20 ${!message ? 'hidden' : ''}`}>
                            <Info message={message} />
                        </div>
                    </div>

                    <PageTitle title={"직원 관리"} checkboxShow={checkboxShow} setCheckboxShow={setCheckboxShow}/>

                    <section className="relative top-6 mx-10 mt-8">
                        <SelectBox selected={"상태 전체"} options={["근무중", "오프", "휴가", "대리근무"]} />
                        <EmployeeTable checkboxShow={checkboxShow} telVisibleIndex={telVisibleIndex} showTel={showTel}/>
                        <Pagenation />
                    </section>

                    <DeleteCheckedItem setCheckboxShow={setCheckboxShow}/>
                    <EditEmployee />

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}