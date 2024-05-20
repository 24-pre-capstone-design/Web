import React, { useEffect } from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import { deleteEmployee, getEmployee, getEmployeeAll, patchEmployee, postEmployee } from "./api/Employee";

export default function App() {

    const accessToken = useCookies(['accessToken']);
    const employeeId =3;
    const updatedEmployee ={
        "name": "최수인",
        "phoneNumber": "010-1111-1111",
        "status": "WORKING",
        "workDate": "월화수"
    }

    useEffect(()=>{
        //post
        const createEmployee = async() => {
            try {
                const employeeData = {
                    "name": "석해현",
                    "phoneNumber": "010-1111-1111",
                    "status": "WORKING",
                    "workDate": "월화수"
                };
                const data = await postEmployee(employeeData, accessToken[0].accessToken);
                return console.log(data);
            } catch (error) {
                console.error("Error creating employee", error);
            }
        };
        createEmployee();

        //get
        const getDate = async() =>{
            try {
                const data = await getEmployee(accessToken[0].accessToken);
                return console.log(data);
            } catch (error) {
                console.error("Error getting employee", error);
            }
        };
        getDate();

        //delete
        const deleteEmployeeData = async() =>{
            try {
                const data = await deleteEmployee(employeeId, accessToken[0].accessToken);
                return console.log(data);
            } catch (error) {
                console.error("Error deleting employee", error);
            }
        };
        deleteEmployeeData();

        //patch
        const patchEmployeeData = async() =>{
            try {
                const data = await patchEmployee(employeeId, updatedEmployee, accessToken[0].accessToken);
                return console.log(data);
            } catch (error) {
                console.error("Error in patch useEffect", error);
            }
        }
        patchEmployeeData();
    },[])
    return (
        <>
            <Routes>
                {
                    accessToken[0].accessToken ?
                        <>
                            <Route path="/home" element={<Home />} />
                            <Route path="/order" element={<OrderPage/>}/>
                            <Route path="/menu" element={<MenuList />} />
                        </>
                        :
                        <>
                            <Route path="/" element={<Login />} />
                            <Route path="/find-password" element={<FindPassword />} />
                        </>
                  }
            </Routes>
        </>
      );
}
