import React from 'react';
import { CgLaptop,CgDollar,CgExternal,CgFileDocument } from "react-icons/cg";
import ProductList from "./ProductList";
import Profit from "./Profit";

const firstLine=[
    {
        title:"누적 주문량",
        icon:<CgLaptop size="45"/>,
        content:"1,698 회"
    },
    {
        title:"월 매출액",
        icon:<CgDollar size="45"/>,
        content:"39,410,958 원"
    },
];
const secondLine=[
    {
        title:"신규주문건",
        icon:<CgExternal size="45"/>,
        content:"4 건"
    },
    {
        title:"진행 중 프로모션",
        icon:<CgFileDocument size="40"/>,
        content:"3 건"
    },

];
const Card = () => {

    return (
        <div className="dashboard--List">
            <div className="card--left">
                <div className="card--container">
                    {firstLine.map(item=>(
                        <div className="card">
                            <div className="card--icon">{item.icon}</div>
                            <div className="card--title">{item.title}</div>
                            <div className="card--content">{item.content}</div>

                        </div>
                    ))}
                </div>
                <div className="card--container">
                    {secondLine.map(item=>(
                        <div className="card">
                            <div className="card--icon">{item.icon}</div>
                            <div className="card--title">{item.title}</div>
                            <div className="card--content">{item.content}</div>
                        </div>
                    ))}
                </div>
                <ProductList/>
                <Profit/>
            </div>
            <div className="card--right">
                <div className="card--2">
                    <div className="card--icon"></div>
                    <div className="card--title">오늘의 메뉴</div>
                </div>
            </div>

        </div>



    );
};

export default Card;
