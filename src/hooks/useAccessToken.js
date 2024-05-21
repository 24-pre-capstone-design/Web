import { useCookies } from "react-cookie";

/**
 * 액세스 토큰을 선언적으로 가져옵니다.
 * @returns 액세스 토큰
 */
export const useAccessToken = () => {
       const accessToken = useCookies(['accessToken']);
       
       return accessToken[0].accessToken;
}