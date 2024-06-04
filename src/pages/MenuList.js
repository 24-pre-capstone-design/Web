import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import React, {useEffect, useState} from "react";
import {menuData} from "../data/data.js";
import Pagenation from "../components/widgets/Pagenation";
import EditMenu from "../components/modal/EditMenu";
import NewCategory from "../components/modal/NewCategory";
import Footer from "../components/widgets/Footer";
import PageTitle from "../components/PageManager/PageTitle";
import DeleteCheckedItem from "../components/modal/DeleteCheckedItem";
import MenuCards from "../components/widgets/MenuCards";
import {getAllFood} from "../api/Food";

export default function MenuList() {

    const [toggle, setToggle] = useState(true);
    const [foods, setFoods] = useState([]);
    const [checkboxShow, setCheckboxShow] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        if (selectedCategory === 'new'){
            document.getElementById('newCategoryModal').showModal();
            setSelectedCategory('');
        }
    },[selectedCategory]);

    useEffect(() => {
        getAllFood().then((response) => {
            console.log(response.data)
            setFoods(response.data);
        });
    }, []);


    return (
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"메뉴 관리"} checkboxShow={checkboxShow} setCheckboxShow={setCheckboxShow} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>

                    <section className="relative top-6 mt-8 mb-8 mx-10">
                        <MenuCards checkboxShow={checkboxShow} foods={foods} />
                    </section>

                    <DeleteCheckedItem setCheckboxShow={setCheckboxShow}/>
                    <EditMenu />
                    <NewCategory />

                    <div className="relative top-20">
                        <Footer/>
                    </div>
                </main>
            </div>
        </>
    )
}