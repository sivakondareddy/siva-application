import React, { useRef } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
import logo from "../Imagess/grope.jpg"; 


function Navbar() {
  const navRef = useRef();

  return (
    <>
      <div className="navbar-cnavbar"></div>
      <header>
        <div>
          <Link to="/" className="navbar-linked-text">
            <div className="navbar-logo-10">
              <img src={logo} className="navbar-yaa" alt="Logo" />
            </div>
          </Link>
        </div>
        <nav ref={navRef}>
          <div className="friend">
            Friend
            </div>
        </nav>
      </header>

 


      
    </>
  );
}

export default Navbar;
