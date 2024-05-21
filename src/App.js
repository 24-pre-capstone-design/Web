import React, { useEffect } from "react";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import MyPage from "./pages/MyPage";

export default function App() {

    const accessToken = useCookies(['accessToken']);

    return (
        <>
            <Routes>
                {
                    accessToken[0].accessToken ?
                        <>
                            <Route path="/home" element={<Home />} />
                            <Route path="/order" element={<OrderPage/>}/>
                            <Route path="/menu" element={<MenuList />} />
                            <Route path="/my" element={<MyPage />} />
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
