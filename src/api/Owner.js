import axios from "axios";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

export const postOwner = async (ownerData) => {
    try {
        const response = await axios.post(`${API_SERVER}/owner`, ownerData);
        return response.data;
    } catch (error) {
        console.error("Error creating owner:", error);
        throw error;
    }
};

export const getOwner = async (ownerId) => {
    console.log("Fetching owner with ID:", ownerId);
    try {
        const response = await axios.get(`${API_SERVER}/owner/${ownerId}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching owner:", error);
        throw error;
    }
};

export const deleteOwner = async (ownerId, authToken) => {
    try {
        const response = await axios.delete(`${API_SERVER}/owner/${ownerId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting owner:", error);
        throw error;
    }
};

export const patchOwner = async (ownerId, updatedOwnerData, authToken) => {
    try {
        await axios.patch(`${API_SERVER}/owner/${ownerId}`, updatedOwnerData, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            }
        });
        return true;
    } catch (error) {
        console.error("Error updating owner:", error);
        return false; 
    }
};