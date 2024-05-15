import React from "react"
import logo from "../assets/images/logo/logo_without_background.png";

export default function Footer(){
    return(
        <footer data-theme="dark" className="footer relative flex items-center justify-between p-4 top-20 bg-neutral text-neutral-content">
            <div className="flex items-center">
                <img src={logo} alt="logo" className="h-10 mr-2" style={{filter: "grayscale(100%)"}} />
                <p>© {(new Date().getFullYear())} NiceToMenu. All right reserved</p>
            </div>

            <div>
                <p>Designed & Developed by SoftwareChiefs</p>
            </div>
        </footer>
    )
}