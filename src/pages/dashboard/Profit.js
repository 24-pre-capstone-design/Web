import React from 'react';
import { CgCalendarDates } from "react-icons/cg";



const orderlist=[
    {
        order_num:"주문번호",
        name:"메뉴",
        num:"수량",
        price:"금액"
    },
    {
        order_num:"1000",
        name:"한돈생삼겹살",
        num:"3",
        price:"51,000"
    },
    {
        order_num:"999",
        name:"한돈너비목살",
        num:"4",
        price:"68,000"
    },
    {
        order_num:"998",
        name:"이슬소주",
        num:"3",
        price:"15,000"
    }
]

const Profit = () => {
    return (
        <div className="card--container">
            <div className="card--1">
                <div className="list--header">
                    <div className="card--icon"><CgCalendarDates size="40"/></div>
                    <div className="card--title">일 매출액</div>
                </div>

                <div className="list--container">
                    {orderlist.map((profit)=>(
                        <div className="list">
                            <span>{profit.order_num}</span>
                            <span>{profit.name}</span>
                            <span>{profit.num}</span>
                            <span>{profit.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profit;
