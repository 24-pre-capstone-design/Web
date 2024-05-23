import {FaTrashAlt, GrPowerReset} from "../../assets/icons/vander";
import React from "react";

export default function EmployeeManager({checkboxShow, setCheckboxShow}){
    return (
        <>
            <button className="btn btn-neutral" onClick={()=>document.getElementById('editEmployee').showModal()}>직원 추가하기</button>
            {
                checkboxShow ?
                    <div className="mx-2">
                        <button className="btn btn-error mx-0.5" onClick={()=>document.getElementById('deleteModal').showModal()}><FaTrashAlt /></button>
                        <button className="btn btn-neutral text-error mx-0.5" onClick={() => setCheckboxShow(false)}><GrPowerReset /></button>
                    </div>
                    :
                    <button className="btn btn-neutral text-error mx-2" onClick={() => setCheckboxShow(true)}>직원 삭제하기</button>

            }
            </>
    );
}