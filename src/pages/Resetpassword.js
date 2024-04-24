import React, {useEffect, useState} from "react";
import Info from "../components/alert/Info";

export default function Resetpassword(){

    const [tempPassword, setTempPassword] = useState("");
    const [replacementPassword, setReplacementPassword] = useState("");
    const [replacementPasswordDouble, setReplacementPasswordDouble] = useState("");

    const [message, setMessage] = useState("");

    const hasRPCredential = () => {
        if (tempPassword.length <=0 && replacementPassword.length <= 0 && replacementPasswordDouble.length <= 0 ) {
            setMessage("임시 비밀번호와 재설정할 비밀번호를 입력해주세요.");
            return false;
        }else if (tempPassword.length <= 0){
            setMessage("임시 비밀번호를 입력해주세요.");
            return false;
        }else if (replacementPassword.length <= 0) {
            setMessage("변경할 비밀번호를 입력해주세요.");
            return false;
        }else if (replacementPasswordDouble.length <= 0) {
            setMessage("변경할 비밀번호를 다시 입력해주세요.");
            return false;
        }else if (replacementPassword !== replacementPasswordDouble) {
            setMessage("변경할 비밀번호가 일치하지 않습니다.");
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

    const replacePassword = () => {
        setMessage("비밀번호가 변경되었습니다. 다시 한 번 로그인해주세요.");
        window.location.href = "/Login";
    }

    return(
        <div className="flex items-center justify-center h-screen bg-gray-800">

            <div className={`fixed top-6 ${!message ? 'hidden' : ''}`}>
                <Info message={message} />
            </div>


            <div className="bg-black p-8 rounded-lg max-w-3xl w-full">
                <h1 className="text-center text-white text-2xl font-bold mb-6">비밀번호 재설정</h1>
                <div className="text-center text-white mb-6">발급받은 임시 비밀번호와 변경할 비밀번호를 입력하고 변경하기를 눌러주세요.</div>

                <div className ="mb-6 flex items-center justify-center">
                    <div className ="mt-4 relative rounded-md shadow-sm">
                        <input type="text" className="bg-transparent w-full outline-none text-white" placeholder="임시 비밀번호" value={tempPassword} onChange = {(e) => setTempPassword(e.target.value)}/>
                    </div>
                </div>

                <div className ="mb-6 flex items-center justify-center">
                    <div className ="mt-4 relative rounded-md shadow-sm">
                        <input type="text" className="bg-transparent w-full outline-none text-white" placeholder="변경할 비밀번호" value={replacementPassword} onChange = {(e) => setReplacementPassword(e.target.value)}/>
                    </div>
                </div>

                <div className ="mb-6 flex items-center justify-center">
                    <div className ="mt-4 relative rounded-md shadow-sm">
                        <input type="text" className="bg-transparent w-full outline-none text-white" placeholder="변경할 비밀번호 재입력" value={replacementPasswordDouble} onChange = {(e) => setReplacementPasswordDouble(e.target.value)}/>
                    </div>
                </div>

                <div>
                    <button type="submit" onClick={() => { if (hasRPCredential()) {replacePassword();} }} className="w-full flex justify-center py-4 px-4 border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700">변경하기</button>
                </div>

            </div>
        </div>
    )
}