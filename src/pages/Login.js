import React, {useState} from "react";
import {Link} from "react-router-dom";

import Findpassword from "./Findpassword";

export default function Login(){

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const onUsernameHandler = (e) => {
    setUsername(e.Target.value);
  }
  const onPasswordHandler = (e) => {
    setPassword(e.Target.value);
  }

  const onClickLogin = () => {
    console.log('Login');
  }

  return(
      <div className="flex items-center justify-center h-screen" style ={{backgroundColor : "#292b2e"}}>
        <div className="bg-black p-8 rounded-lg max-w-3xl w-full">
          <h1 class="text-center text-white text-2xl font-bold mb-6">nice to menu</h1>
          <h2 class="text-center text-white font-bold mb-6">로그인</h2>
          <form>
            <div className ="mb-6">
              <div className ="mt-4 relative rounded-md shadow-sm">
                <input type="text" style={{backgroundColor : "transparent", color : "white", outline : "none", width : "100%"}} placeholder="Username" onChange = {onUsernameHandler}/>
              </div>
            </div>
            <div className="mb-6">
              <div className="mt-4 relative rounded-md shadow-sm">
                <input type="text" style={{backgroundColor : "transparent", color : "white", outline : "none", width : "100%"}} placeholder="Password" onChange = {onPasswordHandler}/>
              </div>
            </div>
            <div className="justify-between mb-6">
              <label className="block text-sm text-white"><input type="checkbox"/>&ensp;아이디 저장<Link to="/Findpassword" style={{backgroundColor : "transparent", color : "white", float: "right"}}>비밀번호찾기</Link></label>
            </div>
            <div>
              <button type="submit" onClick={onClickLogin} style={{backgroundColor : "#3e538c"}} className="w-full flex justify-center py-4 px-4 border-transparent rounded-md text-white hover:bg-indigo-700">로그인</button>
            </div>
          </form>
        </div>
      </div>
    )
}