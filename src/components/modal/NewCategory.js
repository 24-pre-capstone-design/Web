import React from "react";

export default function NewCategory() {
    return (
        <dialog id="newCategoryModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">카테고리 추가</h3>
                <div className="py-3">
                    <span className="badge badge-lg my-1">카테고리 이름</span>
                    <input type="text" className="input input-bordered w-full" placeholder="카테고리 이름을 입력해주세요"/>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mx-0.5">취소</button>
                        <button className="btn mx-0.5">등록</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}