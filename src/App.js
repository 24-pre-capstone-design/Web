import React, {lazy, Suspense} from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import Loding from "./components/widgets/Loding";

const OrderList = lazy(() => import('./pages/OrderList'));
const MenuList = lazy(() => import('./pages/MenuList'));
const MyPage = lazy(() => import('./pages/MyPage'));
const EmployeeList = lazy(() => import('./pages/EmployeeList'));
const NotificationList = lazy(() => import('./pages/NotificationList'));
const Analysis = lazy(() => import('./pages/Analysis'));

export default function App() {

    const accessToken = useCookies(['accessToken']);

  return (
      <>
          <Suspense fallback={<Loding />}>
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
          </Suspense>
      </>
  );
}
