import React from "react";

export default function TwoButton({message, btn1, btn2}){
    return (
        <div role="alert" className="alert shake bg-black border border-gray-800 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>{message}</span>
            <div>
                <button className="btn btn-sm mx-0.5">{btn1}</button>
                <button className="btn btn-sm btn-primary mx-0.5">{btn2}</button>
            </div>
        </div>
    )
}