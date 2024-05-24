import {FaTrashAlt, GrPowerReset} from "../../assets/icons/vander";
import React from "react";

export default function NotificationManager({checkboxShow, setCheckboxShow}){
    return (
        <>
            {
                checkboxShow ?
                    <div className="mx-2">
                        <button className="btn btn-error mx-0.5" onClick={()=>document.getElementById('deleteModal').showModal()}><FaTrashAlt /></button>
                        <button className="btn btn-neutral text-error mx-0.5" onClick={() => setCheckboxShow(false)}><GrPowerReset /></button>
                    </div>
                    :
                    <button className="btn btn-neutral text-error mx-2" onClick={() => setCheckboxShow(true)}>알림 삭제하기</button>

            }
        </>
    )
}