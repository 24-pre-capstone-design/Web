import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

export const postFoodCategory = async (foodCategoryData)=>{
  try{
    const response = await axios.post(`${API_SERVER}/foodCategory`, foodCategoryData);
    return console.log(response.data);
  }catch(error){
    console.error('Error creating food categories:', error);
    throw error;
  }
};

//완
export const getFoodCategory = async() =>{
    try {
        const response = await axios.get(`${API_SERVER}/foodCategory`);
        return console.log(response.data);
    } catch (error) {
        console.error("Error fetching food categories:", error);
        throw error;
    }
}

//완
export const getFoodCategoryId = async (foodCategoryId)=>{
  console.log("Fetching foodCategoryId:", foodCategoryId);
  try{
    const response = await axios.get(`${API_SERVER}/foodCategory/${foodCategoryId}`);
    return console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories by ID:', error);
    throw error;
  }
};

export const deleteFoodCategory = async (foodCategoryId)=>{
  try{
    const response = await axios.delete(`${API_SERVER}/foodCategory/${foodCategoryId}`);
    return console.log(response.data);
  }catch(error){
    console.error('Error deleting food categories:', error);
    throw error;
  }
};

export const patchFoodCategory = async (foodCategoryId, updatedFoodCategory, accessToken) => {
    try {
        const response = await axios.patch(`${API_SERVER}/foodCategory/${foodCategoryId}`, updatedFoodCategory,{
          headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
          }
        });
    return console.log(response.data);
    } catch (error) {
        console.error("Error updating food category:", error);
    throw error;
    }
};

