import React, {useEffect} from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
// import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
// import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
// import {auth_login} from "./api/Auth";
import { postOwner, getOwner, deleteOwner, patchOwner } from "./api/Owner";

export default function App() {

    // useEffect(() => {
    //     const res = auth_login("mingmingmon", "1234asdf!");
    //     if (res) {
    //         console.log(res);
    //     }else{
    //         console.log("error");
    //     }
    // }, []);

    useEffect(() => {
        const testOwner = async () => {
            const ownerId = "mingmingmon"; 
            const authToken = "";
        
            try {
                // const newOwnerData = { id: "t123", password: "1234asdf!", name: "123", birthDate: "20010325" };
                // const postResponse = await postOwner(newOwnerData);
                // console.log('Owner 생성됨:', postResponse);
                
                const getResponse = await getOwner(ownerId);
                console.log('Owner 정보 가져옴:', getResponse);

                const updatedOwnerData = { id: "mingmingmon", password: "1234asdf!", name: "123456", birthDate: "20010325" };
                const patchResponse = await patchOwner(ownerId, updatedOwnerData, authToken);

                if (patchResponse === true) {
                    console.log('Owner 수정 완료');
                } else {
                    console.log('Owner 수정 실패');
                }

                // const deleteResponse = await deleteOwner(ownerId, authToken);
                // console.log('Owner 삭제됨:', deleteResponse);
                
            } catch (error) {
                console.error("Error in owner operations:", error);
            }
        };

        testOwner();
    }, []);


  return (
      <>
          <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              {/* <Route path="/order" element={<OrderPage/>}/> */}
              {/* <Route path="/menu" element={<MenuList />} /> */}
              <Route path="/find-password" element={<FindPassword />} />
          </Routes>
      </>
  );
}
