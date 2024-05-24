import React from "react";

export default function DeleteCheckedItem({setCheckboxShow}) {
    return (
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
    )
}