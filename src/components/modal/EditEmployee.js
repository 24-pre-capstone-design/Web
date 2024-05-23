import {employeeStatus} from "../../data/data";
import React from "react";

export default function EditEmployee({item}){

    return (
        <div className="modal-box w-[768px]">
            <h3 className="font-bold text-lg">직원 등록</h3>

            <div className="py-3">
                <span className="badge badge-lg my-1">직원 이름</span>
                <input type="text" className="input input-bordered w-full" placeholder="직원 이름을 입력해주세요" value={item?.name}/>
            </div>

            <div className="py-3">
                <span className="badge badge-lg my-1">전화번호</span>
                <input type="text" className="input input-bordered w-full" placeholder="전화번호를 입력해주세요(ex.010-1234-1234)" value={item?.phoneNumber}/>
            </div>

            <div className="py-3">
                <span className="badge badge-lg my-1">근무 요일</span>
                <input type="text" className="input input-bordered w-full" placeholder="근무 요일을 입력해주세요(ex.월화수)" value={item?.workDate}/>
            </div>

            <div className="py-3">
                <span className="badge badge-lg my-1">근무 상태</span>
                <select className="select select-bordered w-full max-w-xs">
                    <option disabled selected>근무 상태</option>
                    {
                        employeeStatus.map((s, index) => (
                            <option key={index} selected={item?.status === s.value}>{s.label}</option>
                        ))
                    }
                </select>
            </div>

            <div className="modal-action">
                <form method="dialog">
                    <button className="btn mx-0.5">취소</button>
                    <button className="btn mx-0.5">등록</button>
                </form>
            </div>
        </div>
    )
}