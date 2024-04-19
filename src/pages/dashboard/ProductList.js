import React from 'react';
import { CgClipboard } from "react-icons/cg";


const product=[
    {
        num:"상품번호",
        name:"메뉴",
        price:"판매가격",
        state:"상태"
    },
    {
        num:1,
        name:"한돈생삼겹살",
        price:"17,000",
        state:"판매 중"
    },
    {
        num:2,
        name:"한돈너비목살",
        price:"17,000",
        state:"판매 중"

    },
    {
        num:3,
        name:"한돈등꽃살",
        price:"18,000",
        state:"판매 중"

    }
]

const ProductList = () => {

    return (
        <div className="card--container">
            <div className="card--1">
                <div className="list--header">
                    <div className="card--icon"><CgClipboard size="40"/></div>
                    <div className="card--title">상품목록</div>
                </div>

                <div className="list--container">
                    {product.map((menu)=>(
                        <div className="list">
                            <span>{menu.num}</span>
                            <span>{menu.name}</span>
                            <span>{menu.price}</span>
                            <span>{menu.state}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
