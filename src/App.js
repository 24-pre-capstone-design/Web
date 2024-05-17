import React, { useEffect, useState } from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import { deleteFoodCategory, getFoodCategory, getFoodCategoryId, patchFoodCategory, postFoodCategory } from "./api/FoodCategory";
import { useAccessToken } from "./hooks/useAccessToken";

export default function App() {

    const accessToken = useAccessToken();

    const foodCategoryId = 12;
    const updatedFoodCategory = { name : "라면"};
    useEffect(() => {
        //patchFoodCategory
        const testPatch = async () => {
            try {
                await patchFoodCategory(foodCategoryId, updatedFoodCategory, accessToken);
            } catch (error) {
                console.error('Error in useEffect:', error);
            }
        };
        testPatch();
        
        //deleteFoodCategory
        const testDeleteFoodCategory = async () => {
            try {
                const data = await deleteFoodCategory(foodCategoryId, accessToken);
                return console.log(data);
            } catch (error) {
                console.error("Error deleting food categories:", error);
            }
        };
        testDeleteFoodCategory();

        // postFoodCategory
        const createFoodCategory = async () => {
            try {
                const foodCategoryData = {
                    "name": "김밥"
                };
                const data = await postFoodCategory(foodCategoryData, accessToken);
                return console.log(data);
            } catch (error) {
                console.error("Error creating food categories:", error);
            }
        };
        createFoodCategory();

        //getFoodCategoryId
        getFoodCategoryId(foodCategoryId);

        //getFoodCategory();
        const fetchData = async () => {
          try {
            const data = await getFoodCategory();
            console.log(data);
          } catch (error) {
            console.error("Error fetching food categories:", error);
          }
        };
        fetchData();
    }, []); 



  return (
      <>
          <Routes>
              {
                    accessToken ?
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
