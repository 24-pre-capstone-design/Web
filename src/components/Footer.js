import React from "react"
import { Link } from "react-router-dom"

export default function Footer(){
    return(
        <footer>
           <div className="shadow bg-white px-6 py-4">
                <div className="container-fluid">
                     <div className="grid grid-cols-1">
                        <div className="sm:text-start text-center mx-md-2">
                            <p className="mb-0 text-slate-400">© {(new Date().getFullYear())} NiceToMenu. Design & Develop with by SoftwareChiefs</p>
                        </div>
                     </div>
                    
                </div>
           </div>
        </footer>
    )
}