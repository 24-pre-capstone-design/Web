import axios from "axios";
import {axiosWithoutAuth} from "../common/AxiosInstance";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;


//전체 음식 조회
export async function getAllFood() {
    try {
        //응답 성공
        const response = await axiosWithoutAuth.get('/food');
        return response.data;
    } catch (error) {
        //응답 실패
        console.error("Error fetching getFood",error);
        throw error;
    }
}

export const postFood = async(newFoodData,accessToken)=>{
    try {
        //응답 성공
        const response = await axios.post(`${API_SERVER}/food`,newFoodData
        , {headers:{
                'Authorization':`Bearer ${accessToken}`,
                'Accept':'application/json',
                'Content-Type' :'application/json'}});
        return response.data;
    } catch (error) {
        //응답 실패
        console.error("Error Posting Food",error);
        throw error;
    }}


/*음식 조회*/
export async function getFoodId(foodId) {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/food/${foodId}`,{
            params:{
                //url 뒤에 붙는 param id값
                foodId: 1
            }
        });
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error fetching getFoodId",error);
        throw error;
    }
}

/*음식 삭제*/
export const deleteFood=async (foodId,accessToken) =>{
    try {
        //응답 성공
        const response = await axios.delete(`${API_SERVER}/food/${foodId}`,{
            //헤더에 포함된 정보들
        headers:{
                'Authorization':`Bearer ${accessToken}`,
                'Content-Type' :`application/json`}
        });
        return response.data;
    } catch (error) {
        //응답 실패
        console.error("Error deleting Food",error);
        throw error;
    }
}


/*음식 수정*/
export const editFood = async (foodId, updatedFoodData,accessToken) => {
    try {
        await axios.patch(`${API_SERVER}/food/${foodId}`,updatedFoodData, {
            headers:{
                'Authorization':`Bearer ${accessToken}`,
                'Content-Type' :`application/json`}
        }
        );
        // 성공 시 응답 데이터 반환
        return true;
    } catch (error) {
        // 오류 처리
        console.error("Error fetching editFood", error);
        throw error;
    }
}

//음식 키워드 검색
export async function searchFoodKw() {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/food/search/keyword`,{
            params:{
                //url 뒤에 붙는 param id값
                keyword: "짜장면"
            }
        });
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error fetching searchFoodKw",error);
        throw error;
    }
}
/*카테고리 id별 음식 조회*/
export async function searchCategoryId() {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/food/search/foodCategoryId`,{
            params:{
                //url 뒤에 붙는 param id값
                foodCategoryId: "1"
            }
        });
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error fetching searchCategoryId",error);
        throw error;
    }
}








