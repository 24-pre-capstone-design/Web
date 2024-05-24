import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import React, {useEffect, useState} from "react";
import {menuData} from "../data/data.js";
import Pagenation from "../components/widgets/Pagenation";
import EditMenu from "../components/modal/EditMenu";
import NewCategory from "../components/modal/NewCategory";
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";

export default function MenuList() {

    const [toggle, setToggle] = useState(true);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(8);
    const [menuItem, setMenuItem] = useState([]);
    const [checkboxShow, setCheckboxShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        if (selectedCategory === 'new'){
            document.getElementById('newCategoryModal').showModal();
            setSelectedCategory('');
        }
    },[selectedCategory]);

    useEffect(() => {
        setMenuItem(menuData);
    }, []);

    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"메뉴 관리"} checkboxShow={checkboxShow} setCheckboxShow={setCheckboxShow} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

                    <section className="relative top-6 mt-8 mb-8 mx-10">
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-w-[1440px]">

                            {
                                menuItem && menuItem.map((item, index) => {
                                    const modalId = `updateModal-${item.id}`;
                                    return (
                                        <>
                                            <div className="card h-auto bg-base-100 shadow-xl my-3 mx-2" key={item.id}>
                                                <figure><img src={item.pictureURL} alt=""/></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title justify-between">
                                                        <div>
                                                            {item.name}
                                                            <div className="badge badge-accent badge-outline align-middle mb-1 mx-2">{item.foodCategory}</div>
                                                            <div className="badge badge-warning badge-outline align-middle mb-1">{item.status}</div>
                                                        </div>
                                                        <input type="checkbox" className={`checkbox checkbox-error ${checkboxShow ? '' : 'hidden'}`} />
                                                    </h2>
                                                    <p>{item.price}원</p>
                                                    <div className="card-actions justify-end">
                                                        <button className="btn btn-block" onClick={() => document.getElementById(modalId).showModal()}>메뉴 수정하기</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <dialog id={modalId} className="modal" key={item.id}>
                                                <EditMenu item={item}/>
                                            </dialog>
                                        </>
                                    )
                                })
                            }

                        </div>
                        <Pagenation page={page}/>
                    </section>

                    <dialog id="deleteModal" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Warning!</h3>
                            <p className="py-4">정말 삭제하시겠습니까? 메뉴 삭제 이후에는 복구가 불가능 합니다.</p>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn mx-0.5" onClick={()=>setCheckboxShow(false)}>취소</button>
                                    <button className="btn btn-outline btn-error mx-0.5" onClick={()=>setCheckboxShow(false)}>삭제</button>
                                </form>
                            </div>
                        </div>
                    </dialog>

                    <dialog id="editModal" className="modal">
                        <EditMenu />
                    </dialog>

                    <dialog id="newCategoryModal" className="modal">
                        <NewCategory />
                    </dialog>

                    <div className="relative top-20">
                        <Footer/>
                    </div>
                </main>
            </div>
        </>
    )
}