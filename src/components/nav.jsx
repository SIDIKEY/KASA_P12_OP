import React from "react"
import { NavLink } from "react-router-dom";
import "./nav.scss"
import LOGO from "../images/LOGO.png" 

function Nav() {
  
    return <nav className="nav_bar">
             <div className="Home_logo">
              <img src={LOGO} alt="logo" />
              
             </div>
             <div className="navigation_links">
             <NavLink to="/" className="nav_link">
             <div className="home">Accueil</div >
  
             </NavLink>
             <NavLink to="/aboutus" className="nav_link">
             <div className="about">A propos</div>

             </NavLink>
              
              
              
             </div>
             

           </nav>
  }
  
  export default Nav
  