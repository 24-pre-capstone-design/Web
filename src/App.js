import React, {useEffect} from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
// import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
// import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
// import {auth_login} from "./api/Auth";
// import { postOwner, getOwner, deleteOwner, patchOwner } from "./api/Owner";
import { createNewOrderNotification, getUnreadNotifications, getAllNotifications, deleteNotification, deleteAllNotifications, } from './api/Notification';

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
        const testNotifications = async () => {
            const authToken = ""; 
            const orderHistoryId = 36;  
            const title = '새 주문이 도착했습니다.';
            const content = '주문 ID: 36, 상품: 상품명';
            const notificationId = 36;  


            try {
                const createResponse = await createNewOrderNotification(orderHistoryId, title, content, authToken);
                console.log('새 주문 생성됨 :', createResponse);

                const unreadResponse = await getUnreadNotifications(authToken);
                console.log('읽지 않은 알림 :', unreadResponse);

                const allResponse = await getAllNotifications(authToken);
                console.log('전체 알림 :', allResponse);

                const deleteResponse = await deleteNotification(notificationId, authToken);
                console.log('알림 삭제됨 :', deleteResponse);

                const deleteAllResponse = await deleteAllNotifications(authToken);
                console.log('전체 알림 삭제됨 :', deleteAllResponse);

            } catch (error) {
                console.error("오류 발생 :", error);
            }
        };

        testNotifications();
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
