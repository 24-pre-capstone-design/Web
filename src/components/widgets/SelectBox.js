import React from "react";

export default function SelectBox({selected, options}) {

    return (
        <div className="flex items-center justify-between">
            <select className="select select-bordered select-sm w-36 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                <option selected>{selected}</option>
                {options.map((option, index) => {
                    return (
                        <option key={index}>{option}</option>
                    )
                })}
            </select>
            <select className="select select-bordered select-sm w-28 max-w-xs mx-2 bg-neutral text-gray-50 border border-white/10">
                <option selected>15개</option>
                <option>30개</option>
                <option>45개</option>
            </select>
        </div>
    )
}