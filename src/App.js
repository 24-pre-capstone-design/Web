import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";

export default function App() {
  return (
      <>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/order" element={<OrderPage/>}/>
              <Route path="/menu" element={<MenuList />} />
          </Routes>
      </>
  );
}
