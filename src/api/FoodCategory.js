import axios from 'axios';

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

export const postFoodCategory = async (id, name)=>{
  try{
    const response = await axios.post(`${API_SERVER}/foodCategory`, {
      id : id,
      name : name
    });
    return console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories:', error);
    throw error;
  }
};

export const getFoodCategory = async(id, name) =>{
  console.log("Fetching foodCategory:", id, name);
    try {
        const response = await axios.get(`${API_SERVER}/foodCategory/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching food categories:", error);
        throw error;
    }
}

export const getFoodCategoryId = async (id, name)=>{
  console.log("Fetching foodCategoryId:", id, name);
  try{
    const response = await axios.get('/foodCategoryId');
    console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories:', error);
    throw error;
  }
};

export const deleteFoodCategory = async (foodCategoryId, authToken)=>{
  try{
    const response = await axios.delete(`${API_SERVER}//foodCategoryId/${foodCategoryId}`, {
          headers: {
              'Authorization': `Bearer ${authToken}`
          }
    });
    return response.data;
  }catch(error){
    console.error('Error fetching food categories:', error);
    throw error;
  }
};

export const patchFoodCategory = async (foodCategoryId, updatedFoodCategory, authToken) => {
    try {
        await axios.patch(`${API_SERVER}/foodCategoryId/${foodCategoryId}`, updatedFoodCategory, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'}
        });
        return true;
    } catch (error) {
        console.error("Error updating food categories:", error);
        return false; 
    }
};