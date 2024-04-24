import React, {useEffect, useState} from "react";
import Info from "../components/alert/Info";

export default function Findpassword(){

    const [id, setId] = useState("");
    const [birthDate, setBirthDate] = useState("");

    const [message, setMessage] = useState("");

    const hasFPCredential = () => {
        if (id.length <=0 && birthDate.length <= 0) {
            setMessage("아이디와 생년월일 8자리를 입력해주세요.");
            return false;
        }else if (id.length <= 0){
            setMessage("아이디를 입력해주세요.");
            return false;
        }else if (birthDate.length <= 0) {
            setMessage("생년월일을 입력해주세요.");
            return false;
        }
        return true;
    }
    useEffect(() => {
        if (message) {
          const timer = setTimeout(() => {
            setMessage("");
          }, 2000);
    
          return () => clearTimeout(timer);
        }
    }, [message]);


    let tempTempPassword = '12345';

    return(


        <div className="flex items-center justify-center h-screen bg-gray-800">

            <div className={`fixed top-6 ${!message ? 'hidden' : ''}`}>
                <Info message={message} />
            </div>

            <div className="bg-black p-8 rounded-lg max-w-3xl w-full">

                <h1 className="text-center text-white text-2xl font-bold mb-6">비밀번호 찾기</h1>
                <div className="text-center text-white mb-6">아이디와 생년월일 8자리를 입력해주세요. 임시 비밀번호가 발급됩니다.</div>

                <div className ="mb-6">
                    <div className ="mt-4 relative rounded-md shadow-sm">
                        <input type="text" className="bg-transparent w-full outline-none text-white" placeholder="아이디를 입력하세요" value={id} onChange = {(e) => setId(e.target.value)}/>
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex items-center justify-center mt-4 relative rounded-md text-white">
                        <input type="text" pattern="[0-9]*" maxLength="8" className="bg-transparent outline-none w-[250px]" placeholder="생년월일 8자리를 입력해주세요" value={birthDate} onChange = {(e) => setBirthDate(e.target.value)}/>
                    </div>
                </div>

                <div>
                    <button type="submit" onClick={() => { if (hasFPCredential()) {document.getElementById('printTempPassword').showModal()} }} className="w-full flex justify-center py-4 px-4 border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700">임시 비밀번호 발급</button>
                </div>

                <dialog id="printTempPassword" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">임시비밀번호는 {`${tempTempPassword}`} 입니다.</h3>
                        <p className="py-4">로그인 후 비밀번호를 변경해 주세요.</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn" onClick={() => {window.location.href = "/login";}}>확인</button>
                            </form>
                        </div>
                    </div>
                </dialog>

            </div>
        </div>
    )
}