import {axiosWithoutAuth} from "../common/AxiosInstance";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

export const auth_login = async (id, password) => {
    try {
        const response = await axiosWithoutAuth.post( '/auth/login', {
            id: id,
            password: password,
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching login:", error);
        throw error;
    }
}


