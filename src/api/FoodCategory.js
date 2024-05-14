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

export const getFoodCategory = async(id, string) =>{
  console.log("Fetching foodCategory:", id, string);
    try {
        const response = await axios.get(`${API_SERVER}/foodCategory/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching food categories:", error);
        throw error;
    }
}




export const getFoodCategoryId = async ()=>{
  try{
    const response = await axios.get('/foodCategory');
    console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories:', error);
    throw error;
  }
};

export const deleteFoodCategory = async (id, authToken)=>{
  try{
    const response = await axios.delete(`${API_SERVER}//foodCategory/${id}`, {
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
