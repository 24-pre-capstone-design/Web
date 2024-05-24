import Sidebar from "../components/widgets/sidebar";
import Topnav from "../components/widgets/topnav";
import React, {useState} from "react";
import Footer from "../components/widgets/Footer";
import {Link} from "react-router-dom";
import {Bar, CartesianGrid, Cell, ComposedChart, Legend, Line, Pie, PieChart, PolarAngleAxis, PolarGrid, Radar, RadarChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {categorySales, COLORS, menuData, monthlySellData, renderCustomizedLabel, sellData, reviewData} from "../data/data";
import PageTitle from "../components/PageManager/PageTitle";

export default function Analysis() {

    const [toggle, setToggle] = useState(true);

    return(
        <>
            <div className={`page-wrapper bg-black ${toggle ? "toggled" : ""}`}>
                <Sidebar/>
                <main className="page-content h-screen">
                    <Topnav toggle={toggle} setToggle={setToggle}/>

                    <PageTitle title={"ANALYSIS"} />

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
                                <div className="h-90 bg-neutral rounded-lg">
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
                                <div className="h-64 bg-neutral rounded-2xl">
                                    <ResponsiveContainer width="100%" height="100%">
                                        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={reviewData}>
                                            <PolarGrid />
                                            <PolarAngleAxis dataKey="subject" stroke="white"/>
                                            <Radar dataKey="A" stroke="#722f37" fill="#722f37" fillOpacity={0.8} />
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