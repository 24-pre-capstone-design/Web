import React, {useEffect} from "react";
import {Link, useLocation} from "react-router-dom";


import SimpleBarReact from "simplebar-react";
import 'simplebar-react/dist/simplebar.min.css';

import {AiOutlineAppstore, AiOutlineLineChart, FaBell, TbHandFinger, IoMdPerson, FaPeopleCarry, FaLightbulb} from '../assets/icons/vander'
import logo from "../assets/images/logo/logo_without_background_long.png";

export default function Sidebar(){
    const location = useLocation();
    
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [location]);

    return(
        <nav className="sidebar-wrapper">
            <div data-theme="dark" className="sidebar-content">
                <div className="sidebar-brand">
                    <Link to="/home"><img src={logo} alt="logo" className="h-8 w-56" style={{filter: "grayscale(50%)"}} /></Link>
                </div>
            <SimpleBarReact style={{height:"calc(100% - 70px)"}}> 
                <ul className="sidebar-menu border-white/10">

                    <li>
                    {/*    대시보드 메뉴 입니다. */}
                    </li>

                    <li>
                        <Link to="/home" className="text-gray-400 text-xl py-5"><AiOutlineAppstore className="me-3 icon"/>대시보드</Link>
                    </li>

                    <li>
                        <Link to="/my" className="text-gray-400 text-xl py-5"><IoMdPerson className="me-3 icon"/>마이페이지</Link>
                    </li>

                    <li>
                        <Link to="/order" className="text-gray-400 text-xl py-5"><FaBell className="me-3 icon"/>주문 관리</Link>
                    </li>

                    <li>
                        <Link to="/menu" className="text-gray-400 text-xl py-5"><TbHandFinger className="me-3 icon"/>상품 및 메뉴 관리</Link>
                    </li>

                    <li>
                        <Link to="/notification" className="text-gray-400 text-xl py-5"><FaLightbulb className="me-3 icon"/>알림 관리</Link>
                    </li>

                    <li>
                        <Link to="/employee" className="text-gray-400 text-xl py-5"><FaPeopleCarry className="me-3 icon"/>직원 관리</Link>
                    </li>

                    <li>
                        <Link to="/analysis" className="text-gray-400 text-xl py-5"><AiOutlineLineChart className="me-3 icon"/>리포팅 및 분석</Link>
                    </li>

                </ul>
            </SimpleBarReact>
            </div>
        </nav>
        
    )
}