import {GrCart, LuLightbulb} from "../../assets/icons/vander";
import CountUp from "react-countup";
import React, {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {getNewOrderNumber, getRevenueByDate} from "../../api/OrderHistory";

export default function HomeStats({formatPrice}) {

    const [revenue, setRevenue] = useState(0);
    const [newOrders, setNewOrders] = useState(0);
    const [cookie, setCookie] = useCookies(['accessToken']);

    const getToday = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        getRevenueByDate(getToday(), cookie.accessToken).then(response => {
            setRevenue(response.data);
        });

        getNewOrderNumber(cookie.accessToken).then(response => {
            setNewOrders(response.data);
        });

    }, []);

    return (
        <>
            <div data-theme="dark" className="stats shadow mt-5 mx-2" >
                <div className="stat">
                    <div className="stat-figure text-primary">
                        <GrCart className="inline-block w-8 h-8 stroke-current"/>
                    </div>
                    <div className="stat-title">Total Orders</div>
                    <div className="stat-value text-primary text-3xl"><CountUp start={newOrders-10} end={newOrders} /> 건</div>
                    <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 총 주문 건
                        수 입니다.
                    </div>
                </div>

                <div className="stat">
                    <div className="stat-title">Total Sales</div>
                    <div className="stat-value text-secondary text-3xl">{formatPrice(revenue)}</div>
                    <div className="stat-desc">{new Date().getMonth() + 1}월 {new Date().getDate()}일의 매출액
                        입니다.
                    </div>
                </div>
            </div>

            <div data-theme="dark" className="stats shadow mt-5 mx-2">
                <div className="stat">
                    <div className="stat-figure text-success">
                        <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                    </div>
                    <div className="stat-title">New Orders</div>
                    <div className="stat-value text-success text-3xl"><CountUp start={newOrders-10} end={newOrders} duration={3}/> 건</div>
                    <div className="stat-desc">새로 요청된 주문입니다.</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-accent">
                        <LuLightbulb className="inline-block w-10 h-10 stroke-current"/>
                    </div>
                    <div className="stat-title">Food On Sale</div>
                    <div className="stat-value text-accent text-3xl"><CountUp start={20} end={30} /> 개</div>
                    <div className="stat-desc">현재 판매 중인 메뉴의 개수 입니다.</div>
                </div>
            </div>
        </>
    )
}