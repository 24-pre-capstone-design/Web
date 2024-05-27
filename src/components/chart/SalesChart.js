import {Bar, CartesianGrid, ComposedChart, Legend, Line, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {sellData} from "../../data/data";
import React from "react";

export default function SalesChart() {
    return (
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
    )
}