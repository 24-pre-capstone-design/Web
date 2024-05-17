import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import OrderPage from "./pages/OrderPage";
import Login from "./pages/Login";
import MenuList from "./pages/MenuList";
import FindPassword from "./pages/FindPassword";
import {useCookies} from "react-cookie";
import {useEffect} from "react";
import {postFood} from "./api/Food";
import {getFood,editFood,getFoodId,deleteFood,searchFoodKw,searchCategoryId} from "./api/Food";
export default function App() {

    const accessToken = useCookies(['accessToken']);

    useEffect(() => {
        const testFood = async () => {
            const foodId=1;
            const keyword="짜장";
            const foodCategoryId=10;

            try{
                //전체 Food 조회
                const getFoodResponse = await getFood();
                console.log('전체 Food 조회 완료: ',getFoodResponse);

                //Food 조회
                const getResponse = await getFoodId(foodId);
                console.log('Food 조회 완료: ',getResponse);

                // 음식 키워드 검색
                const keywordSearchResult = await searchFoodKw(keyword);
                console.log('음식 키워드 검색 결과:', keywordSearchResult);

                // 카테고리 id 별 음식 조회
                const categoryIdSearchResult = await searchCategoryId(foodCategoryId);
                console.log('카테고리 id 별 음식 조회 결과:', categoryIdSearchResult);

                //Food 생성
                const newFoodData = {
                    "foodCategoryId":"1",
                    "name": "참치김밥",
                    "password": "4500",
                    "pictureURL": "",
                    "status": "SALE",}
                const postResponse=await postFood(newFoodData,accessToken[0].accessToken);
                console.log('Food 생성 완료: ',postResponse);

                // food 삭제
                const deleteResponse= await deleteFood(foodId,accessToken[0].accessToken);
                console.log('Food 삭제:',deleteResponse);

                //food 수정
                const updatedFoodData= {
                    foodCategoryId: 1,
                    name: "불닭김밥",
                    password: "5500",
                    pictureURL: "",
                    status: "SALE",

                }
                const patchResponse = await editFood(foodId,updatedFoodData,accessToken[0].accessToken);

                if(patchResponse===true) {
                    console.log('Food 수정 완료');
                }else{
                    console.log('Food 수정 실패');
                }

            }catch(error){
                console.log("Error in Food operations",error);
            }

        };
        testFood();
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
