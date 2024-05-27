import {employeeData, employeeStatus} from "../../data/data";
import React, {useState} from "react";
import EditEmployee from "../modal/EditEmployee";

export default function EmployeeTable({checkboxShow, telVisibleIndex, showTel}) {

    const [employee, setEmployee] = useState(null);

    async function editEmployee(item) {
        await setEmployee(item);
        document.getElementById(item.id + "modal").showModal();
    }

    return (
        <div className="overflow-x-auto p-2">
            <table className="table text-center mt-2">
                <thead>
                <tr className="h-11 border-t border-gray-400 text-gray-50 text-[14px]">
                    <th className="w-10"></th>
                    <th className="w-14">번호</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>근무요일</th>
                    <th>근무상태</th>
                    <th>직원 수정</th>
                </tr>
                </thead>
                <tbody className="text-white/85">
                {
                    employeeData.map((item, index) => {
                        return (
                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                <td>
                                    <input type="checkbox" className={`checkbox checkbox-error mx-2 ${checkboxShow ? '' : 'hidden'}`} />
                                </td>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    {
                                        telVisibleIndex === index ? item.phoneNumber :
                                            <>
                                                <button
                                                    className="btn btn-xs btn-active"
                                                    onClick={()=>showTel(index)}>전화번호 보기</button>
                                            </>
                                    }
                                </td>
                                <td>{item.workDate}</td>
                                <td>{
                                    employeeStatus.map((status, index) => {
                                        if (status.value === item.status) {
                                            return status.label
                                        }
                                    })
                                }</td>
                                <td>
                                    <button className="btn btn-xs btn-success" onClick={() => editEmployee(item)}>수정</button>
                                </td>
                            </tr>
                        )})
                }
                </tbody>
            </table>

            <EditEmployee item={employee} />

        </div>
    )
}