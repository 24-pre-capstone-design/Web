import {Link} from "react-router-dom";
import {saleData} from "../../data/data";
import React, {useEffect, useState} from "react";
import {getAllNotifications} from "../../api/Notification";
import {useCookies} from "react-cookie";

export default function RecentNotificationTableHome({formatPrice}){

    const [notifications, setNotifications] = useState([]);
    const [cookies, setCookie] = useCookies(['accessToken']);

    useEffect(() => {
        const data = getAllNotifications(0,5, cookies.accessToken);
        data.then(response => {
            setNotifications(response.data?.items);
        });

    },[]);

    return (
        <div className="overflow-x-auto mx-2">
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-white font-bold m-2">최근 알림 내역</h3>
                <Link to="/notification" className="link mx-2 text-gray-400">알림 더보기</Link>
            </div>
            <table className="table text-gray-400 table-b">
                <thead className="text-gray-400">
                <tr className="border-none">
                    <th></th>
                    <th>제목</th>
                    <th>생성시각</th>
                </tr>
                </thead>
                <tbody className="text-white/70">
                {
                    notifications.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.title}</td>
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