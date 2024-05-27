import React from "react";

export default function DeleteAccount() {
    return (
        <dialog id="deleteAccountModal" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg text-error">Warning!</h3>
                <p className="py-4">정말 탈퇴하시겠습니까? 탈퇴 이후에는 복구가 불가능 합니다.</p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn mx-0.5">취소</button>
                        <button className="btn btn-outline btn-error mx-0.5">탈퇴</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}