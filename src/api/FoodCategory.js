import axios from 'axios';

const axios = require('axios');

export const getFoodCategory = async ()=>{
  try{
    const response = await axios.get('/foodCategory');
    console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories:', error);
  }
};

export const postFoodCategory = async (id, name)=>{
  try{
    const response = await axios.post('/foodCategory', {
      id : id,
      name : name
    });
    console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories:', error);
  }
};

export const getFoodCategoryId = async ()=>{
  try{
    const response = await axios.get('/foodCategory');
    console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories:', error);
  }
};

export const deleteFoodCategory = async ()=>{
  try{
    const response = await axios.delete('/foodCategory', {
      id : id,
      name : name
    });
    console.log(response.data);
  }catch(error){
    console.error('Error fetching food categories:', error);
  }
};