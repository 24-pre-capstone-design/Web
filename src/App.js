import React, { useEffect } from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import { deleteFoodCategory, getFoodCategory, postFoodCategory } from "./api/FoodCategory";

export default function App() {

    const accessToken = useCookies(['accessToken']);

    useEffect(() => {
    const foodCategory = async () => {
        const id = 0; 
        const name = "";
        const authToken = "";
            try {
                const newFoodCategory = { id: "0", name: "김밥" };
                const postResponse = await postFoodCategory(newFoodCategory);
                console.log('FoodCategory 생성:', postResponse);

                const getResponse = await getFoodCategory(id,name);
                console.log('FoodCategory 정보 get:', getResponse);

                const deleteResponse = await deleteFoodCategory(id, authToken);
                console.log('FoodCategory삭제:', deleteResponse);

            } catch (error) {
                console.error("Error in foodCategory operations:", error);
            }
        };
        foodCategory();
    }, []);

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
