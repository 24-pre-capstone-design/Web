import {Link} from "react-router-dom";
import {menuData} from "../../data/data";
import React from "react";

export default function PopularMenuTable(){
    return (
        <div className="overflow-x-auto mx-2">
            <div className="flex items-center justify-between">
                <h3 className="text-xl text-white font-bold m-2">인기 메뉴</h3>
                <Link to="/menu" className="link mx-2 text-gray-400">메뉴 더보기</Link>
            </div>
            <table className="table text-center mt-2">
                <thead>
                <tr className="h-11 border-t border-gray-400 text-gray-50 text-[14px]">
                    <th>순위</th>
                    <th>이름</th>
                    <th>카테고리</th>
                    <th>가격</th>
                </tr>
                </thead>
                <tbody className="text-white/85">
                {
                    menuData.slice(0,6).map((menu, index) => (
                        <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                            <td>{index+1}</td>
                            <td>{menu.name}</td>
                            <td>{menu.foodCategory}</td>
                            <td>{menu.price}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}