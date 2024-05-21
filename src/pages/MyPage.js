import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import React, {useState} from "react";
import profile_img from "../assets/images/profile_empty.jpeg";
import logo from "../assets/images/logo/logo_without_background_long.png";
import CountUp from "react-countup";
import {Link} from "react-router-dom";
import {notificationData} from "../data/data";
import Footer from "../components/Footer";

export default function MyPage(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-6 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">MY PAGE</h3>

                        <div className="flex items-center mx-10">
                            <label data-theme="dark" className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow w-28"
                                    placeholder="Search"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
                                     className="w-4 h-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                          clipRule="evenodd"/>
                                </svg>
                            </label>
                        </div>

                    </div>

                    <section className="relative top-6 mt-3 mb-8 mx-6">

                        <div data-theme="light" className="stats shadow mt-6 mx-2 py-4 px-3">
                            <div className="stat">
                                <div className="avatar">
                                    <img className="mask mask-squircle w-24 h-24" src={profile_img} style={{filter: "grayscale(50%)"}} />
                                </div>
                                <div className="stat-figure">
                                    <div className="stat-title text-2xl mx-2 my-1">이한음 님, 반갑습니다.</div>
                                    <div className="text-3xl">
                                        <img src={logo} alt="logo" className="h-8 w-60 inline-block" style={{filter: "grayscale(50%)"}} />
                                        <span> 와 함께한지 <span className="font-bold text-success">D+<CountUp start={90} end={100} /></span> 일 되었습니다.</span>
                                    </div>
                                </div>
                            </div>

                            <div className="stat">
                                <div className="stat-figure">
                                    <button className="btn btn-success block w-48 my-1 text-white">비밀번호 변경</button>
                                    <button className="btn btn-error block w-48 my-1 text-white ">회원 탈퇴</button>
                                </div>
                            </div>

                        </div>

                        <div className="divider divider-neutral mt-8 mb-3"></div>

                        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10">
                            <div className="overflow-x-auto mx-2 md:col-span-4 lg:col-span-4">
                                <div className="flex items-center">
                                    <h3 className="text-xl text-white font-bold m-2">내 정보</h3>
                                </div>
                                <table className="table text-gray-400">
                                    <tbody>
                                        <tr>
                                            <td>아이디</td>
                                            <td>mingmingmon</td>
                                        </tr>
                                        <tr>
                                            <td>이름</td>
                                            <td>전민주</td>
                                        </tr>
                                        <tr>
                                            <td>생년월일</td>
                                            <td>20020722</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <button className="btn btn-active block w-full my-2">내 정보 수정</button>
                            </div>

                            <div className="overflow-x-auto mx-2 md:col-span-8 lg:col-span-8">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl text-white font-bold m-2">최근 알림 내역</h3>
                                    <Link to="/menu" className="link mx-2 text-gray-400">알림 더보기</Link>
                                </div>
                                <table className="table text-gray-400 table-b">
                                    {/* head */}
                                    <thead className="text-gray-400">
                                    <tr className="border-none">
                                        <th></th>
                                        <th>제목</th>
                                        <th>내용</th>
                                        <th>생성시각</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {
                                        notificationData.map((data, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{data.id}</td>
                                                    <td>{data.title}</td>
                                                    <td>{data.content}</td>
                                                    <td>{data.createdAt}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </section>

                    <Footer/>
                </main>
            </div>
        </>
    )
}