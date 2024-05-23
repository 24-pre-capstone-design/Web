import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderList from "./pages/OrderList";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import MyPage from "./pages/MyPage";
import EmployeeList from "./pages/EmplyeeList";
import NotificationList from "./pages/NotificationList";
import Analysis from "./pages/Analysis";

export default function App() {

    const accessToken = useCookies(['accessToken']);

  return (
      <>
          <Routes>
              {
                    accessToken[0].accessToken ?
                        <>
                            <Route path="/home" element={<Home />} />
                            <Route path="/order" element={<OrderList/>}/>
                            <Route path="/menu" element={<MenuList />} />
                            <Route path="/my" element={<MyPage />} />
                            <Route path="employee" element={<EmployeeList />} />
                            <Route path="/notification" element={<NotificationList />} />
                            <Route path="/analysis" element={<Analysis />} />
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
