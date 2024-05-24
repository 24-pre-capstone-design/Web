import {Cell, Legend, Pie, PieChart, ResponsiveContainer} from "recharts";
import {categorySales, COLORS, renderCustomizedLabel} from "../../data/data";
import React from "react";

export default function CategorySalesChart() {
    return (
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
    )
}