import axios from 'axios';
import {axiosWithoutAuth} from "../common/AxiosInstance";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

const setHeaders = (accessToken) => {
   return {
            'Authorization': `Bearer ${accessToken}`,
          }
}

export const postFoodCategory = async (foodCategoryData,token)=>{
  try{
    const response = await axios.post(`${API_SERVER}/foodCategory`, foodCategoryData,{
          headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        });
      return response.data;
  }catch(error){
    console.error('Error creating food categories:', error);
    throw error;
  }
};

export const getFoodCategory = async() =>{
    try {
        const response = await axiosWithoutAuth.get('/foodCategory');
        return response.data;
    } catch (error) {
        console.error("Error fetching food categories:", error);
        throw error;
    }
}

export const getFoodCategoryId = async (foodCategoryId)=>{
  try{
    const response = await axiosWithoutAuth.get(`/foodCategory/${foodCategoryId}`);
    return response.data;
  }catch(error){
    console.error('Error fetching food categories by ID:', error);
    throw error;
  }
};

export const deleteFoodCategory = async (foodCategoryId, accessToken)=>{
  try{
    const response = await axios.delete(`${API_SERVER}/foodCategory/${foodCategoryId}`,{
      headers: setHeaders(accessToken)
    });
    return console.log(response.data);
  }catch(error){
    console.error('Error deleting food categories:', error);
    throw error;
  }
};
//완
export const patchFoodCategory = async (foodCategoryId, updatedFoodCategory, accessToken) => {
    try {
        const response = await axios.patch(`${API_SERVER}/foodCategory/${foodCategoryId}`, updatedFoodCategory,{
          headers: setHeaders(accessToken)
        });
        return console.log(response.data);
    } catch (error) {
        console.error("Error updating food category:", error);
    throw error;
    }
};

