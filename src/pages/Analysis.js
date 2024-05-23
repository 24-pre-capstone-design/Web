import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import React, {useState} from "react";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import {
    Area,
    Bar, BarChart,
    CartesianGrid,
    ComposedChart,
    Legend,
    Line, Rectangle,
    ResponsiveContainer, Scatter,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {employeeData, employeeStatus, menuData} from "../data/data";

export default function Analysis() {

    const [toggle, setToggle] = useState(true);

    const data = [
        {
            "date": '05-15',
            "주문건수" : 25,
            "매출액" : 800,
        },
        {
            "date": '05-16',
            "주문건수" : 30,
            "매출액" : 967,
        },
        {
            "date": '05-17',
            "주문건수" : 29,
            "매출액" : 1098,
        },
        {
            "date": '05-18',
            "주문건수" : 37,
            "매출액" : 1200,
        },
        {
            "date": '05-19',
            "주문건수" : 42,
            "매출액" : 1108,
        },
        {
            "date": '05-20',
            "주문건수" : 11,
            "매출액" : 680,
        },
        {
            "date": '05-21',
            "주문건수" : 38,
            "매출액" : 1700,
        }
    ];

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <div className="relative top-6 mx-10 flex items-center justify-between">
                        <h3 className="text-4xl text-white font-bold">ANALYSIS</h3>

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

                    <section className="relative top-6 mt-6 mb-8 mx-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                            <div className="overflow-x-auto mx-2">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl text-white font-bold m-2">인기 메뉴</h3>
                                    <Link to="/menu" className="link mx-2 text-gray-400">메뉴 더보기</Link>
                                </div>
                                <table className="table text-center mt-2">
                                    <thead>
                                    <tr className="h-11 border-t border-gray-400 text-gray-50 text-[14px]">
                                        <th>순위</th>
                                        <th>이름</th>
                                        <th>카테고리</th>
                                        <th>가격</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-white/85">
                                    {
                                        menuData.slice(0,6).map((menu, index) => (
                                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                                <td>{index+1}</td>
                                                <td>{menu.name}</td>
                                                <td>{menu.foodCategory}</td>
                                                <td>{menu.price}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>

                            <div className="overflow-x-auto mx-2">
                                <div className="flex items-center">
                                    <h3 className="text-xl text-white font-bold m-2">판매 현황</h3>
                                </div>
                                <div className="h-90 bg-white rounded-lg">
                                <ResponsiveContainer width="100%" height="100%">
                                    <ComposedChart
                                        width={500}
                                        height={400}
                                        data={data}
                                        margin={{
                                            top: 50,
                                            right: 20,
                                            bottom: 20,
                                            left: 0,
                                        }}
                                    >
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="date" />
                                        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="매출액" yAxisId="left" fill="#8884d8" barSize={20} activeBar={<Rectangle fill="pink" stroke="blue" />} />
                                        <Line type="monotone" dataKey="주문건수" yAxisId="right" stroke="#ff7300" />
                                    </ComposedChart>
                                </ResponsiveContainer>
                                </div>
                            </div>
                        </div>

                        <div className="divider divider-neutral mt-8"></div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10">

                        </div>
                    </section>

                    <div className="relative top-20">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    );
}