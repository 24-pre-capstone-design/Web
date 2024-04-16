import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";


import * as Icon from 'react-feather'
import {AiOutlineSetting, FaUser, IoMdLogOut} from '../assets/icons/vander'
import 'simplebar-react/dist/simplebar.min.css';

export default function Topnav({setToggle, toggle}){
    let [user, setUser] = useState(false)

    useEffect(()=>{
        let userData = () => {
            setUser(false)
        }
        document.addEventListener('mousedown',userData)

        return()=>{
            document.removeEventListener('mousedown',userData)
        }

    },[])
    const toggleHandler = () => {
        setToggle(!toggle)
      }
    return(
        <>
            <div className="top-header">
                <div className="header-bar flex justify-between">
                    <div className="flex items-center space-x-1">

                        <Link id="close-sidebar"
                              className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 hover:bg-gray-100 border border-gray-400 text-slate-900 rounded-full">
                            <Icon.Menu  className="h-4 w-4" onClick={toggleHandler}/>
                        </Link>

                    </div>

                    <ul className="list-none mb-0 space-x-1">
                        <li className="dropdown inline-block relative">
                            <button onClick={()=> setUser(!user)} className="dropdown-toggle items-center" type="button">
                                <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 hover:bg-gray-100 border border-gray-100 text-slate-900 rounded-full"><FaUser className="icon" /></span>
                                <span className="font-semibold text-[16px] text-lg text-white ms-1 px-2 sm:inline-block">관리자님</span>
                            </button>
                            <div className={`dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-black border border-gray-400 shadow ${user ? '' : 'hidden'}`} >
                                <ul className="py-2 text-start">
                                    <li>
                                        <Link to="/setting" className="flex items-center font-medium py-1 px-4 text-white hover:text-yellow-500"><AiOutlineSetting className="me-2"/>관리자 설정</Link>
                                    </li>
                                    <li>
                                        <Link to="/login" className="flex items-center font-medium py-1 px-4 text-white hover:text-yellow-500"><IoMdLogOut className="me-2"/>로그아웃</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}