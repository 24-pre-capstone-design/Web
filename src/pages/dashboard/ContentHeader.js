import React from 'react';
import {BiSearch} from "react-icons/bi";

const ContentHeader = () => {
    return (
        <div className="content--header">
            <div className="header--title">
                <h3>DashBoard</h3>
                <h7 className="header--subtitle">스마트 키오스크 대시보드</h7>
            </div>

            <div className="header--activity">
                <div className="search-box">
                    <input type="text" placeholder='SEARCH'/>
                    <BiSearch className="icon"/>
                </div>
            </div>



        </div>
    );
};

export default ContentHeader;
