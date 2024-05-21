import React, {useState} from "react";
export default function EditOwnerInfo({owner}){

    const [name, setName] = useState('전민주');
    const [birth, setBirth] = useState('20200722');

    return (
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
    )
}