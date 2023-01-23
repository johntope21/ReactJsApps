import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Scrollspy from "react-scrollspy";




const Header = ()=>{
    return(
        
        <>
        <div className="nav-bar">
                <Link to ="/"><img src ="men logo.png" alt ="men logo"/></Link>
                <div className="mobile">
                <ul className="show">
                    <li><Link to="#Methods">Methods</Link></li>
                    <li><Link to="#MissionVision">Vision/Mission</Link></li>
                    <li><Link to="#Board">Board of Trustee</Link></li>
                    <li><Link to="#Contact">Contact</Link></li>
                    <li><Link to="/GetBook">Get A Book</Link></li>
                    <li><Link to="/Gallery">Gallery</Link></li>
                    <li><Link to="">Facebook</Link></li>
                    </ul>
                    <button id="btn" onClick="handletoggle" >=</button>
                </div>
                </div>
            <div className="desktop">
            <ul className="toggle">
            <li><Link to="#Methods">Methods</Link></li>
                <li><Link to="#MissionVision">Vision/Mission</Link></li>
                <li><Link to="#Board">Board of Trustee</Link></li>
                <li><Link to="#Contact">Contact</Link></li>
                <li><Link to="/GetBook">Get A Book</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="">Facebook</Link></li>
            </ul>
            </div>
        </>
            
    )

    
        
    
}

export default Header;