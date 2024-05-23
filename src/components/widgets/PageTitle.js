import React from "react";
import EmployeeManager from "./PageManager/EmployeeManager";
import MenuManager from "./PageManager/MenuManager";
import NotificationManager from "./PageManager/NotificationManager";
import OrderManager from "./PageManager/OrderManager";

export default function  PageTitle ({title}) {

    const renderComponents = () => {
        const componentMap = {
            "직원 관리": EmployeeManager,
            "메뉴 관리": MenuManager,
            "알림 관리": NotificationManager,
            "주문 관리": OrderManager,
        };

        const ComponentToRender = componentMap[title];
        return ComponentToRender ? <ComponentToRender /> : null;
    };


    return (
        <div className="relative top-6 mx-10 flex items-center justify-between">
            <h3 className="text-4xl text-white font-bold">{title}</h3>

            <div className="flex items-center mx-10">
                {renderComponents()}
                <label data-theme="dark" className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow w-28"
                        placeholder="Search"
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                         className="w-4 h-4 opacity-70">
                        <path fillRule="evenodd"
                              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                              clipRule="evenodd"/>
                    </svg>
                </label>
            </div>
        </div>
    )
}