import axios from 'axios';
import {useCookies} from "react-cookie";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;

// 로그인 하지 않은 상태의 axios 인스턴스
export const axiosWithoutAuth = axios.create(
    {
        baseURL: API_SERVER,
        headers: {
            'Content-Type': 'application/json'
        }
    }
);

// 액세스 토큰을 사용하는 axios 인스턴스
export const axiosWithAccessToken = axios.create({
    baseURL: API_SERVER,
    headers: {
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${accessToken}`
    }
});

// multipart를 content-type으로 하는 axios 인스턴스
export const axiosWithMultipartContentType = axios.create({
    baseURL: API_SERVER,
    headers: {
        'Content-Type': 'multipart/form-data'
        // 'Authorization': `Bearer ${accessToken}`
    }
});

axiosWithAccessToken.interceptors.request.use(
    config => {
        const accessToken = useCookies(['accessToken'])[0].accessToken;
        if (accessToken) {
            alert("로그인 시간이 만료되었습니다.");
            window.location.href = "/login";
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axiosWithMultipartContentType.interceptors.request.use(
    config => {
        const accessToken = useCookies(['accessToken'])[0].accessToken;
        if (accessToken) {
            alert("로그인 시간이 만료되었습니다.");
            window.location.href = "/login";
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);


