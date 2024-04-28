import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import React, {useEffect, useState} from "react";
import {category, menuData} from "../data/data.js";
import Pagenation from "../components/Pagenation";
import {FaTrashAlt, GrPowerReset} from '../assets/icons/vander'
import EditMenu from "../components/modal/EditMenu";
import NewCategory from "../components/modal/NewCategory";

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

                    <div className="relative top-25 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">상품 및 메뉴 관리</h3>

                        <div className="flex items-center mx-10">
                            <button className="btn text-primary" onClick={()=>document.getElementById('editModal').showModal()}>메뉴 추가하기</button>
                            {
                                checkboxShow ?
                                    <div className="mx-2">
                                        <button className="btn btn-error mx-0.5" onClick={()=>document.getElementById('deleteModal').showModal()}><FaTrashAlt /></button>
                                        <button className="btn text-red-600 mx-0.5" onClick={() => setCheckboxShow(false)}><GrPowerReset /></button>
                                    </div>
                                    :
                                    <button className="btn text-red-600 mx-2" onClick={() => setCheckboxShow(true)}>선택 삭제</button>

                            }
                            <select
                                className="select select-bordered w-36 max-w-xs mx-2"
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                            >
                                <option selected>카테고리 전체</option>
                                {
                                    category.map((c, index) => (
                                        <option key={index} value={c.name}>{c.name}</option>
                                    ))
                                }
                                <option value="new">--카테고리 추가--</option>
                            </select>
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow w-28"
                                    placeholder="Search"
                                    />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" />
                                </svg>
                            </label>
                        </div>
                    </div>


                    <section className="relative top-25 mt-8 mb-8 mx-10">
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


                </main>
            </div>
        </>
    )
}