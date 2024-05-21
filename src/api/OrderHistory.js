import axios from "axios";

const API_SERVER = process.env.REACT_APP_API_SERVER_URL;


// 주문 내역 생성(post)
export const postNewOrderHistory = async(newOrderData,accessToken)=>{
    try {
        //응답 성공
        const response = await axios.post(`${API_SERVER}/orderHistory`, newOrderData
            , {headers:{
                    'Authorization':`Bearer ${accessToken}`,
                    'Accept':'application/json',
                    'Content-Type' :'application/json'}});
        return response.data;
    } catch (error) {
        //응답 실패
        console.error("Error Posting newOrderHistory",error);
        throw error;
    }
}


// 주문 내역 조회(post)
export const searchOrderHistory = async(orderHistoryId,accessToken)=>{
    try {
        //응답 성공
        const response = await axios.post(`${API_SERVER}/orderHistory/${orderHistoryId}`,{
            params: {
            orderHistoryId:1
            }}
            , {headers:{
                    'Authorization':`Bearer ${accessToken}`,
                    'Accept':'application/json',
                    'Content-Type' :'application/json'}});
        return response.data;
    } catch (error) {
        //응답 실패
        console.error("Error Searching OrderHistory",error);
        throw error;
    }
}

// 주문내역 상태 수정(PATCH)

export const editOrderHistory = async (orderHistoryId,orderHistoryStatus,accessToken) => {
    try {
        await axios.patch(`${API_SERVER}/orderHistory/${orderHistoryId}`, {
            orderHistoryId:0,
            orderHistoryStatus:'NEW'

            }, {

                headers:{
                    'Authorization':`Bearer ${accessToken}`,
                    'Content-Type' :`application/json`}
            }
        );
        // 성공 시 응답 데이터 반환
        return true;
    } catch (error) {
        // 오류 처리
        console.error("Error editing OrderHistory", error);
        throw error;
    }
}

//주문상태별로 주문내역 조회(GET)
export async function getOrderByStatus(orderHistoryStatus) {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/orderHistory/${orderHistoryStatus}`,{
            params:{
                //url 뒤에 붙는 param id값
                orderHistoryStatus:"NEW"
            }
        });
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error getting OrderHistory By Status",error);
        throw error;
    }
}

//결제번호로 주문내역조회(GET)
export async function 회(paymentId) {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/orderHistory/payment/${paymentId}`,{
            params:{
                //url 뒤에 붙는 param id값
                paymentId:2
            }
        });
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error getting OrderHistory By PaymentId",error);
        throw error;
    }
}
//신규 주문내역 개수 조회(GET)
export async function getnewOrderNumber() {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/orderHistory/new}`);
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error getting newOrder Number",error);
        throw error;
    }
}
//월 매출액 조회(GET)
export async function getMonth(year,month) {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/orderHistory/month`,{
            params:{
                //url 뒤에 붙는 param id값
                year:2023,
                month:5
            }
        });
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error getting Month",error);
        throw error;
    }
}

//최신순으로 주문내역 전체조회(GET)
export async function getByLatest() {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/orderHistory/latest`);
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error getting By Latest",error);
        throw error;
    }
}
// 날짜로 주문내역 조회
export async function getByDate(date) {
    try {
        //응답 성공
        const response = await axios.get(`${API_SERVER}/orderHistory/Date`,{
            date:'20'
        });
        return console.log(response.data);
    } catch (error) {
        //응답 실패
        console.error("Error getting By Date",error);
        throw error;
    }
}
