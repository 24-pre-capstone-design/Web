import React from "react";

export default function MyInfoTable({owner}) {

    return (
        <div className="overflow-x-auto mx-2 md:col-span-3 lg:col-span-3">
            <div className="flex items-center">
                <h3 className="text-xl text-white font-bold m-2">내 정보</h3>
            </div>
            <table className="table text-white/85">
                <tbody>
                <tr>
                    <td>아이디</td>
                    <td>{owner?.id}</td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td>{owner?.name}</td>
                </tr>
                <tr>
                    <td>생년월일</td>
                    <td>{owner?.birthDate}</td>
                </tr>
                </tbody>
            </table>
            <button className="btn btn-active block w-full my-2"
                    onClick={() => document.getElementById('editOwnerInfo').showModal()}>내 정보 수정</button>
        </div>
    )
}