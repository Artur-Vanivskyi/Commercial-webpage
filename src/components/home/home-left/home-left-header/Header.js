import React from "react";
import logo from "../../../../assests/images/logo.png";
import "./header.css";

function Header() {
    return (
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#our-projects">Features</a></li>
              <li><span>/</span></li>
              <li><a href="#contact">Pricing</a></li>
              <li><span>/</span></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      );
}

export default Header;
