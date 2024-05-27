import React from "react"
import logo from "../../assets/images/logo/logo_without_background.png";

export default function Footer(){
    return(
        <footer data-theme="dark" className="footer absolute flex items-center justify-between p-4 bottom-0 bg-neutral text-neutral-content">
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