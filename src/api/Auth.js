import axios from "axios";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

export const auth_login = async (id, password) => {
    try {
        const response = await axios.post( `${API_SERVER}/auth/login`, {
            id: id,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching login:", error);
        throw error;
    }
}
