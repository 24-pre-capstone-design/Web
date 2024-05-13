import React, {useEffect} from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {auth_login} from "./api/Auth";

export default function App() {

    useEffect(() => {
        const res = auth_login("mingmingmon", "1234asdf!");
        if (res) {
            console.log(res);
        }else{
            console.log("error");
        }
    }, []);


  return (
      <>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/order" element={<OrderPage/>}/>
              <Route path="/menu" element={<MenuList />} />
              <Route path="/find-password" element={<FindPassword />} />
          </Routes>
      </>
  );
}
