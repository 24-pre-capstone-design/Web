import React, {useState} from "react";
import {Link} from "react-router-dom";


import * as Icon from 'react-feather'
import {AiOutlineSetting, FaUser, IoMdLogOut} from '../assets/icons/vander'
import 'simplebar-react/dist/simplebar.min.css';
import {useCookies} from "react-cookie";
import {notificationData} from "../data/data";

export default function Topnav({toggle, setToggle}){

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
                    <div className="dropdown dropdown-hover dropdown-end">
                        <div tabIndex={0} role="button">
                            <button className="btn btn-ghost btn-circle mx-2">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                    <span className="badge badge-xs badge-primary indicator-item"></span>
                                </div>
                            </button>
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-white text-black rounded-box w-[420px]">
                            {
                                notificationData.map((item, index) => {
                                    return(
                                        <li key={index}>
                                            <Link to="/notification" className="flex items-center py-2 px-3 hover:bg-gray-100">
                                                <div className="flex items-center justify-center w-8 h-8 bg-gray-200 text-gray-700 rounded-full">
                                                    <Icon.Bell className="h-5 w-5"/>
                                                </div>
                                                <span className="ms-2 text-sm">{item.title}</span>
                                                <span className="ms-2 text-sm">{item.createdAt}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <a className="btn btn-neutral" onClick={() => {logout()}}>log out</a>
                </div>
            </div>
        </>
    )
}