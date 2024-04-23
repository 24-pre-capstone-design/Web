import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import React, {useEffect, useState} from "react";
import { menuData } from "../data/data.js";

export default function MenuList() {

    const [toggle, setToggle] = useState(true);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(16);
    const [menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        setMenuItem(menuData)
    }, []);

    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-25 mx-10">
                        <h3 className="text-4xl text-white font-bold">상품 및 메뉴 관리</h3>
                    </div>

                    <section className="relative top-25 mt-8 mb-8 mx-10">
                        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">

                            {
                                menuItem && menuItem.map((item, index) => {
                                    return (
                                        <div className="card h-auto bg-base-100 shadow-xl my-3">
                                            <figure><img
                                                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                                alt="Shoes"/></figure>
                                            <div className="card-body">
                                                <h2 className="card-title">
                                                    Shoes!
                                                    <div className="badge badge-secondary">NEW</div>
                                                </h2>
                                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                                <div className="card-actions justify-end">
                                                    <div className="badge badge-outline">Fashion</div>
                                                    <div className="badge badge-outline">Products</div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }



                        </div>
                    </section>

                </main>
            </div>
        </>
    )
}