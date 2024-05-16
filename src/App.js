import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import { deleteFoodCategory, getFoodCategory, getFoodCategoryId, patchFoodCategory, postFoodCategory } from "./api/FoodCategory";

export default function App() {

    const accessToken = useCookies(['accessToken']);

    const foodCategoryId = 1;
    const updatedFoodCategory = { name : "라면"};
    useEffect(() => {
        //patchFoodCategory 테스트 코드
        const testPatch = async () => {
            try {
                await patchFoodCategory(foodCategoryId, updatedFoodCategory, accessToken);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        testPatch();
        
        //deleteFoodCategory 테스트 코드
        // const deleteData = async () => {
        //     try {
        //         const data = await deleteFoodCategory(foodCategoryId);
        //         console.log(data);
        //     } catch (error) {
        //         console.error("Error deleting food categories:", error);
        //     }
        // };
        // deleteData();

        // postFoodCategory 테스트 코드
        // const createFoodCategory = async () => {
        //     try {
        //         const foodCategoryData = {
        //         name: "김밥"
        //         };
        //         const data = await postFoodCategory(foodCategoryData);
        //         console.log(data);
        //     } catch (error) {
        //         console.error("Error creating food categories:", error);
        //     }
        // };
        // createFoodCategory();

        //getFoodCategoryId 테스트 코드
        // getFoodCategoryId(foodCategoryId);

        //getFoodCategory(); 테스트 코드
        //     const fetchData = async () => {
        //   try {
        //     const data = await getFoodCategory();
        //     console.log(data);
        //   } catch (error) {
        //     console.error("Error fetching food categories:", error);
        //   }
        // };
        //   fetchData();
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
