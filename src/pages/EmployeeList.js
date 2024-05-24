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

export default function EmployeeList(){

    const [toggle, setToggle] = useState(true);
    const [telVisibleIndex, setTelVisibleIndex] = useState(null);
    const [employee, setEmployee] = useState({});
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

    const updateEmployee = (item) => {
        setEmployee(item);
        document.getElementById("updateEmployee").showModal();
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

                        <div className="flex items-center justify-between">
                            <select className="select select-bordered select-sm w-36 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                                <option selected>상태 전체</option>
                                <option>근무중</option>
                                <option>오프</option>
                                <option>휴가</option>
                                <option>대리근무</option>
                            </select>
                            <select className="select select-bordered select-sm w-28 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                                <option selected>15개</option>
                                <option>30개</option>
                                <option>45개</option>
                            </select>
                        </div>
                        <EmployeeTable checkboxShow={checkboxShow} telVisibleIndex={telVisibleIndex} showTel={showTel} updateEmployee={updateEmployee}/>
                        <Pagenation />
                    </section>

                    <DeleteCheckedItem setCheckboxShow={setCheckboxShow}/>

                    <dialog id="updateEmployee" className="modal">
                        <EditEmployee item={employee} />
                    </dialog>

                    <dialog id="editEmployee" className="modal">
                        <EditEmployee />
                    </dialog>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    )
}