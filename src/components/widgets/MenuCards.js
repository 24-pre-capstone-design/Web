import EditMenu from "../modal/EditMenu";
import React from "react";
import {menuData} from "../../data/data";

export default function MenuCards({checkboxShow}) {
    return (
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 max-w-[1440px]">
            {
                menuData && menuData.map((item, index) => {
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
    )
}