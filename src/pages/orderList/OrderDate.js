import React from "react";

const OrderDate = () =>{
    return(
        <div className="flex justify-end pt-6 rounded-lg focus:outline-none ">
            <input type="date" className="p-2 mr-2 bg-gray-800 text-white"></input>
            <h5 className="p-2 bg-gray-800 text-white"> ~ </h5>
            <input type="date" className="p-2 bg-gray-800 text-white"></input>
        </div>
    )
}

export default OrderDate;