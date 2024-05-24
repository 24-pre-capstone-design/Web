import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import React, {useState} from "react";
import profile_img from "../assets/images/profile_empty.jpeg";
import logo from "../assets/images/logo/logo_without_background_long.png";
import CountUp from "react-countup";
import {Link} from "react-router-dom";
import {notificationData} from "../data/data";
import Footer from "../components/widgets/Footer";
import DeleteAccount from "../components/modal/DeleteAccount";
import EditOwnerInfo from "../components/modal/EditOwnerInfo";
import UpdatePassword from "../components/modal/UpdatePassword";
import PageTitle from "../components/PageManager/PageTitle";

export default function MyPage(){

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"MY PAGE"} />

                    <section className="relative top-6 mt-3 mx-6">

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
                                    <button className="btn btn-success block w-48 my-1 text-white"
                                            onClick={() => document.getElementById('updatePassword').showModal()}>비밀번호 변경</button>
                                    <button className="btn btn-error block w-48 my-1 text-white"
                                            onClick={() => document.getElementById('deleteAccountModal').showModal()}>회원 탈퇴</button>
                                </div>
                            </div>

                        </div>

                        <div className="divider divider-neutral mt-8 mb-3"></div>

                        <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-10">
                            <div className="overflow-x-auto mx-2 md:col-span-3 lg:col-span-3">
                                <div className="flex items-center">
                                    <h3 className="text-xl text-white font-bold m-2">내 정보</h3>
                                </div>
                                <table className="table text-white/85">
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
                                <button className="btn btn-active block w-full my-2"
                                        onClick={() => document.getElementById('editOwnerInfo').showModal()}>내 정보 수정</button>
                            </div>

                            <div className="overflow-x-auto mx-2 md:col-span-9 lg:col-span-9">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl text-white font-bold m-2">최근 알림 내역</h3>
                                    <Link to="/menu" className="link mx-2 text-gray-400">알림 더보기</Link>
                                </div>
                                <table className="table text-gray-400 table-b">
                                    {/* head */}
                                    <thead className="text-white">
                                    <tr className="border-none">
                                        <th></th>
                                        <th>제목</th>
                                        <th>내용</th>
                                        <th>생성시각</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-white/85">
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

                    <DeleteAccount />
                    <EditOwnerInfo />
                    <UpdatePassword />

                    <div className="relative top-75">
                        <Footer/>
                    </div>
                </main>
            </div>
        </>
    )
}