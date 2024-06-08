import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import Info from "../components/alert/Info";
import {auth_login} from "../api/Auth";
import {useCookies} from "react-cookie";

import logo from "../assets/images/logo/long_simple_logo.png";

export default function Login(){

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isRemember, setIsRemember] = useState(true);

  const [message, setMessage] = useState("");

  const [cookie, setCookie] = useCookies(['accessToken']);

  const hasCredential = () => {
    if (id.length <=0 && password.length <= 0) {
        setMessage("아이디와 비밀번호를 입력해주세요");
        return false;
    }else if (id.length <= 0){
        setMessage("아이디를 입력해주세요");
        return false;
    }else if (password.length <= 0) {
        setMessage("비밀번호를 입력해주세요");
        return false;
    }
    return true;
  }

  const saveIdHasChecked = () => {
    if (isRemember) {
      localStorage.setItem("ntm_id", id);
    }else{
      localStorage.removeItem("ntm_id");
    }
  }

  const hasIdInLocalStorage = () => {
    const id = localStorage.getItem("ntm_id");
    if (id) {
      setId(id);
    }
  }

  const login = async () => {
    try {
        const response = await auth_login(id, password);
        setCookie("accessToken", response.data.accessToken, {path: "/"});
        window.location.href = "/home";
    } catch (error) {
        setMessage("인증에 실패했습니다.");
    }
  }

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  useEffect(() => {
    hasIdInLocalStorage();
  }, []);

  return(
      <div className="flex items-center justify-center h-screen bg-gray-800">

        <div className={`fixed top-6 ${!message ? 'hidden' : ''}`}>
            <Info message={message} />
        </div>

        <div className="bg-black p-8 rounded-lg max-w-3xl w-full">
          <img src={logo} className="w-64 mx-auto" alt="logo"/>
            <div className ="mb-6">
              <div className ="mt-4 relative rounded-md shadow-sm">
                <input type="text"
                       className="bg-transparent w-full outline-none text-white"
                       placeholder="아이디를 입력하세요"
                       value={id}
                       onChange = {(e) => setId(e.target.value)}
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="mt-4 relative rounded-md shadow-sm">
                <input type="password"
                       className="bg-transparent w-full outline-none text-white"
                       placeholder="비밀번호를 입력하세요"
                       value={password}
                       onChange = {(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="justify-between mb-6 flex items-center">
              <div className="form-control w-28">
                <label className="label cursor-pointer">
                  <input type="checkbox"
                         defaultChecked
                         className="checkbox checkbox-primary"
                         checked={isRemember}
                         onChange = {(e) => setIsRemember(e.target.checked)}
                  />
                  <span className="label-text text-white">아이디 저장</span>
                </label>
              </div>
              <div className="flex items-center">
                <Link to="/find-password" className="label-text text-white text-end mx-2">비밀번호찾기</Link>
              </div>
            </div>

            <div>
              <button type="submit"
                      onClick={() => {
                        if (hasCredential()) {
                          saveIdHasChecked();
                          login();
                        }
                      }}
                      className="w-full flex justify-center py-4 px-4 border-transparent rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >로그인</button>
            </div>
        </div>
      </div>
    )
}