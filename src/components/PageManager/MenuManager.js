import {FaTrashAlt, GrPowerReset} from "../../assets/icons/vander";
import {category} from "../../data/data";
import React from "react";

export default function MenuManager({checkboxShow, setCheckboxShow, selectedCategory, setSelectedCategory}){
    return(
        <>
            <button className="btn btn-neutral" onClick={()=>document.getElementById('modal').showModal()}>메뉴 추가하기</button>
            {
                checkboxShow ?
                    <div className="mx-2">
                        <button className="btn btn-error mx-0.5" onClick={()=>document.getElementById('deleteModal').showModal()}><FaTrashAlt /></button>
                        <button className="btn btn-neutral text-error mx-0.5" onClick={() => setCheckboxShow(false)}><GrPowerReset /></button>
                    </div>
                    :
                    <button className="btn btn-neutral text-error mx-2" onClick={() => setCheckboxShow(true)}>선택 삭제</button>

            }
            <select
                className="select select-bordered bg-neutral text-white w-36 max-w-xs mx-2"
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
        </>
    )
}