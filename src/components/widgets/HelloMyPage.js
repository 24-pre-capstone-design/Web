import profile_img from "../../assets/images/profile_empty.jpeg";
import logo from "../../assets/images/logo/logo_without_background_long.png";
import CountUp from "react-countup";
import React from "react";

export default function HelloMyPage({owner}){
    return (
        <div data-theme="light" className="stats shadow mt-6 mx-2 py-4 px-3">
            <div className="stat">
                <div className="avatar">
                    <img className="mask mask-squircle w-24 h-24" src={profile_img} style={{filter: "grayscale(50%)"}} />
                </div>
                <div className="stat-figure">
                    <div className="stat-title text-2xl mx-2 my-1">{owner?.name} 님, 반갑습니다.</div>
                    <div className="text-3xl">
                        <img src={logo} alt="logo" className="h-8 w-60 inline-block" style={{filter: "grayscale(50%)"}} />
                        <span> 와 함께한지 <span className="font-bold text-success">D+<CountUp start={122} end={132} /></span> 일 되었습니다.</span>
                    </div>
                </div>
            </div>

            <div className="stat">
                <div className="stat-figure">
                    <button className="btn btn-success block w-48 my-1 text-white"
                            onClick={() => document.getElementById('updatePassword').showModal()}>비밀번호 변경</button>
                    <button className="btn btn-error block w-48 my-1 text-white"
                            onClick={() => document.getElementById('deleteAccountModal').showModal()}>회원 탈퇴</button>
                </div>
            </div>
        </div>
    )
}