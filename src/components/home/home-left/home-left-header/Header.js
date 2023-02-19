import React from "react";
import logo from "../../../../assests/images/logo2.png";
import "./header.css";

function Header() {
    return (
        <header className="header">
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <nav className="navigation">
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>
      );
}

export default Header;
