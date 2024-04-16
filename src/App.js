import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";

export default function App() {
  return (
      <>
          <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/order" element={<OrderPage/>}/>
          </Routes>
      </>
  );
}
