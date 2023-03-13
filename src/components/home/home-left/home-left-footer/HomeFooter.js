import React from "react";
import "./homefooter.css";



function HomeFooter() {
  return (
    <div className="home-footer-container">
        <div className="arrow-box">
        <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="home-footer-text">
            <p>We make your glasswork</p> 
            <p>easy <span>/</span> fast <span>/</span> convinient</p>
        </div>
    </div>
  )
}

export default HomeFooter;
