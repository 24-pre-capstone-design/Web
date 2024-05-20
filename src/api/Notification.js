import axios from "axios";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

export const createNewOrderNotification = async (orderHistoryId, title, content, authToken) => {
    try {
        const requestData = { orderHistoryId, title, content };

        const response = await axios.post(`${API_SERVER}/notifications/newOrder`, requestData, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            params: {
                orderHistoryId
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating new order notification:", error.response ? error.response.data : error.message);
        throw error;
    }
};

export const getUnreadNotifications = async (authToken) => {
    try {
        const response = await axios.get(`${API_SERVER}/notifications/unread`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching unread notifications:", error);
        throw error;
    }
};

export const getAllNotifications = async (authToken) => {
    try {
        const response = await axios.get(`${API_SERVER}/notifications/all`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching all notifications:", error);
        throw error;
    }
};

export const deleteNotification = async (notificationId, authToken) => {
    try {
        const response = await axios.delete(`${API_SERVER}/notifications/${notificationId}`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting notification:", error);
        throw error;
    }
};

export const deleteAllNotifications = async (authToken) => {
    try {
        const response = await axios.delete(`${API_SERVER}/notifications/deleteAll`, {
            headers: {
                'Authorization': `Bearer ${authToken}`,
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error deleting all notifications:", error);
        throw error;
    }
};