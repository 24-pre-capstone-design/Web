import React from "react";

export default function UpdatePassword({owner}){

    return (
        <dialog id="updatePassword" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">비밀번호 변경</h3>
                <div className="py-3">
                    <span className="badge badge-lg my-1">생년월일</span>
                    <input type="text" className="input input-bordered w-full" placeholder="생년월일을 입력하세요 (ex.20200722)"/>
                </div>
                <div className="py-3">
                    <span className="badge badge-lg my-1">새 비밀번호</span>
                    <input type="password" className="input input-bordered w-full" placeholder="새 비밀번호를 입력하세요"/>
                </div>
                <div className="py-3">
                    <span className="badge badge-lg my-1">비밀번호 확인</span>
                    <input type="password" className="input input-bordered w-full" placeholder="비밀번호를 다시 입력하세요"/>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mx-0.5">취소</button>
                        <button className="btn mx-0.5">변경</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}