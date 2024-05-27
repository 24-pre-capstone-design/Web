import {notificationAllData} from "../../data/data";
import React from "react";

export default function NotificationTable({checkboxShow}) {
    return (
        <div className="overflow-x-auto p-2">
            <table className="table text-center mt-2">
                <thead>
                <tr className="h-11 border-t border-gray-400 text-gray-50 text-[14px]">
                    <th className="w-10"></th>
                    <th className="w-14">번호</th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>생성시각</th>
                    <th>상태</th>
                </tr>
                </thead>
                <tbody className="text-white/85">
                {
                    notificationAllData.map((item, index) => {
                        return (
                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                <td>
                                    <input type="checkbox" className={`checkbox checkbox-error mx-2 ${checkboxShow ? '' : 'hidden'}`} />
                                </td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.content}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.read ? "읽음" : "안읽음"}</td>
                            </tr>
                        )})
                }
                </tbody>
            </table>
        </div>
    )
}