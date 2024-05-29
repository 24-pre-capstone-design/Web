import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

export default function EditOwnerInfo({owner}){

    const [name, setName] = useState("");
    const [birth, setBirth] = useState("");
    const [cookie, setCookie] = useCookies(['accessToken']);

    useEffect(() => {
        setName(owner?.name);
        setBirth(owner?.birthDate);
    }, [owner]);

    return (
        <dialog id="editOwnerInfo" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">내 정보 수정</h3>
                <div className="py-3">
                    <span className="badge badge-lg my-1">이름</span>
                    <input type="text" className="input input-bordered w-full" value={name} onChange={() => setName()}/>
                </div>
                <div className="py-3">
                    <span className="badge badge-lg my-1">생년월일</span>
                    <input type="text" className="input input-bordered w-full" value={birth} onChange={() => setBirth()}/>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mx-0.5">취소</button>
                        <button className="btn mx-0.5">수정</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}