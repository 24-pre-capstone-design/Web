import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts";
import {reviewData} from "../../data/data";
import React from "react";

export default function ReviewChart() {
    return (
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
    )
}