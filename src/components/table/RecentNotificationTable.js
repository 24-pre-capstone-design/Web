import {Link} from "react-router-dom";
import {notificationData} from "../../data/data";
import React from "react";

export default function RecentNotificationTable() {
    return(
        <div className="overflow-x-auto mx-2 md:col-span-9 lg:col-span-9">
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-white font-bold m-2">최근 알림 내역</h3>
                <Link to="/notification" className="link mx-2 text-gray-400">알림 더보기</Link>
            </div>
            <table className="table text-gray-400 table-b">
                <thead className="text-white">
                <tr className="border-none">
                    <th></th>
                    <th>제목</th>
                    <th>내용</th>
                    <th>생성시각</th>
                </tr>
                </thead>
                <tbody className="text-white/85">
                {
                    notificationData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
                                <td>{data.content}</td>
                                <td>{data.createdAt}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}