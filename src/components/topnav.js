import React, {useState} from "react";
import {Link} from "react-router-dom";


import * as Icon from 'react-feather'
import {AiOutlineSetting, FaUser, IoMdLogOut} from '../assets/icons/vander'
import 'simplebar-react/dist/simplebar.min.css';
import {useCookies} from "react-cookie";

export default function Topnav({toggle, setToggle}){

    const [adminToggle, setAdminToggle] = useState(false);
    const [cookie, setCookie] = useCookies(['accessToken']);

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    const logout = () => {
        setCookie("accessToken", "", {path: "/"});
        window.location.href = "/";
    }

    return(
        <>
            <div className="navbar bg-neutral text-neutral-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div onClick={toggleHandler} role="button" className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </div>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost text-xl">Nice to Menu</a>
                </div>
                <div className="navbar-end mx-2">
                    <button className="btn btn-ghost btn-circle mx-2">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                    <a className="btn btn-neutral" onClick={() => {logout()}}>log out</a>
                </div>
            </div>

            {/*<div className="top-header">*/}
            {/*    <div className="header-bar flex justify-between">*/}
            {/*        <div className="flex items-center space-x-1">*/}

            {/*            <Link id="close-sidebar"*/}
            {/*                  className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 hover:bg-gray-100 border border-gray-400 text-slate-900 rounded-full">*/}
            {/*                <Icon.Menu  className="h-4 w-4" onClick={toggleHandler}/>*/}
            {/*            </Link>*/}

            {/*        </div>*/}

            {/*        <ul className="list-none mb-0 space-x-1">*/}
            {/*            <li className="dropdown inline-block relative">*/}
            {/*                <button className="dropdown-toggle items-center" type="button" onClick={() => setAdminToggle(!adminToggle)}>*/}
            {/*                    <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 hover:bg-gray-100 border border-gray-100 text-slate-900 rounded-full"><FaUser className="icon" /></span>*/}
            {/*                    <span className="font-semibold text-[16px] text-lg text-white ms-1 px-2 sm:inline-block">관리자님</span>*/}
            {/*                </button>*/}
            {/*                <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-black border border-gray-400 shadow ${adminToggle ? '' : 'hidden'}`} >*/}
            {/*                    <ul className="py-2 text-start">*/}
            {/*                        <li>*/}
            {/*                            <Link to="/setting" className="flex items-center font-medium py-1 px-4 text-white hover:text-indigo-600"><AiOutlineSetting className="me-2"/>관리자 설정</Link>*/}
            {/*                        </li>*/}
            {/*                        <li>*/}
            {/*                            <Link*/}
            {/*                                className="flex items-center font-medium py-1 px-3 text-white hover:text-indigo-600"*/}
            {/*                                onClick={() => {logout();}}>*/}
            {/*                                <IoMdLogOut className="me-2"/>로그아웃</Link>*/}
            {/*                        </li>*/}
            {/*                    </ul>*/}
            {/*                </div>*/}
            {/*            </li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}