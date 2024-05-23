import Sidebar from "../components/sidebar";
import Topnav from "../components/topnav";
import React, {useState} from "react";
import Footer from "../components/Footer";
import {Link} from "react-router-dom";
import {
    Bar,
    CartesianGrid, Cell,
    ComposedChart,
    Legend,
    Line, Pie, PieChart, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart,
    Rectangle,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import {categorySales, COLORS, menuData, monthlySellData, renderCustomizedLabel, sellData} from "../data/data";

const data = [
    {
        subject: '맛',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: '양',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: '가격',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: '분위기',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: '위생',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: '친절함',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];


export default function Analysis() {

    const [toggle, setToggle] = useState(true);


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

                    <section className="relative top-6 mt-6 mb-10 mx-6">
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
                                        data={sellData}
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
                            <div className="overflow-x-auto mx-2">
                                <div className="flex items-center">
                                    <h3 className="text-xl text-white font-bold m-2">월별 매출액</h3>
                                </div>
                                <table className="table text-center mt-2">
                                    <thead>
                                    <tr className="h-11 border-t border-gray-400 text-gray-50 text-[14px]">
                                        <th>월</th>
                                        <th>매출액(만원)</th>
                                        <th>주문건수</th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-white/85">
                                    {
                                        monthlySellData.map((data, index) => (
                                            <tr key={index} className={`border-b border-gray-800 ${index%2===0 ? 'bg-gray-800/30' : ''}`}>
                                                <td>{data.month}</td>
                                                <td>{data.sales}</td>
                                                <td>{data.orderCount}</td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>
                                </table>
                            </div>

                            <div className="overflow-x-auto mx-2">
                                <div className="flex items-center">
                                    <h3 className="text-xl text-white font-bold m-2">카테고리별 판매 현황</h3>
                                </div>
                                <div className="h-64 bg-neutral rounded-2xl">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <PieChart width={400} height={400}>
                                            <Pie
                                                data={categorySales}
                                                cx="50%"
                                                cy="50%"
                                                labelLine={false}
                                                label={renderCustomizedLabel}
                                                outerRadius={100}
                                                fill="#8884d8"
                                                dataKey="value"
                                            >
                                                {categorySales.map((entry, index) => (
                                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                                ))}
                                            </Pie>
                                            <Legend />
                                        </PieChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>

                            <div className="overflow-x-auto mx-2">
                                <div className="flex items-center">
                                    <h3 className="text-xl text-white font-bold m-2">고객 평가</h3>
                                </div>
                                <div className="h-64 bg-white rounded-2xl">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" />
                                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#722f37" fillOpacity={0.8} />
                                        </RadarChart>
                                    </ResponsiveContainer>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div className="relative top-25">
                        <Footer/>
                    </div>

                </main>
            </div>
        </>
    );
}