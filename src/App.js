import React, {useState} from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Sidebar from "./components/sidebar";
import Topnav from "./components/topnav";

export default function App() {

  const [toggle, setToggle] = useState(true);

  return (
      <>
          <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
              <Sidebar/>
              <main className="page-content h-screen">
                  <Topnav toggle={toggle} setToggle={setToggle}/>
                  <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/home" element={<Home />} />
                  </Routes>
              </main>
          </div>
      </>
  );
}
