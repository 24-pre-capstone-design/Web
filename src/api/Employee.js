import axios from 'axios';
import {axiosWithAccessToken} from "../common/AxiosInstance";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

export const postEmployee = async (employeeData, token)=>{
    try {
        const response = await axios.post(`${API_SERVER}/employee`, employeeData,{
            headers:{
                'Content-Type' : 'application/json',
                'Accept': 'application/json',
                'Authorization' : `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating employee',error);
        throw error;
    }
};

export const getAllEmployee = async(token) =>{
    try {
        const response = await axiosWithAccessToken(token).get(`/employee/all`);
        return response.data;
    } catch (error) {
        console.error('Error getting employee',error);
        throw error;
    }
}

export const deleteEmployee = async(employeeId, token) =>{
    try {
        const response = await axios.delete(`${API_SERVER}/employee/${employeeId}`, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error deleting employee',error);
        throw error;
    }
}

export const patchEmployee = async(employeeId, updatedEmployee, token) =>{
    try {
        const response = await axios.patch(`${API_SERVER}/employee/${employeeId}`, updatedEmployee, {
            headers: {
                'Authorization' : `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error updating employee',error);
        throw error;
    }
}