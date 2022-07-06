import react from "react"
import logo from "./assets/81915-clock-globe-compass-chart-nautical-brand-thumb.png"


function Header(){
    return(
        <>
        <nav className="navbar bg-light mb-4 p-0">
             <div className="container">
        <div className="coolanimation"><div className="coolanimationimg"></div></div>
                 <a href="/" className="navbar-brand" />
                 <div className="mt-2" id="namelogo">
                    <img src={logo} className="mb-1"  width="40px" height="40px" />
                    <div className="mt-1 m-2">VS Project Management</div>
                 </div>
                
             </div>
        </nav>
        </>
    )
}

export default Header;