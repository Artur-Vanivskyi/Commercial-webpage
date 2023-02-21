import React from "react";
import "./about.css";


function About() {
  return (
    <div className="about-container">
        <div className="about-left-container">
            <div className="about-caption">
                <div className="caption">About Us</div>
            </div>
            <div className="about-text">
                <div className="text">We are here to bring you a nice fresh perspective on space division issue from people who love what they do!</div>
            </div>
        </div>
        <div className="about-right-container">
            <div className="form-top">
                <div className="top-text">
                    <h2>Free</h2>
                    <h2>Estimate</h2>
                    <p>Get you product</p>
                </div>
                <div className="socials">
                    <ul className="socials-list">
                        <li className="socials-item">
                        <a href="/"> 
                    <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                        </li>
                        <li className="socials-item">
                        <a href="/">
                    <ion-icon name="logo-facebook"></ion-icon>
                    </a>
                        </li>
                        <li className="socials-item">
                        <a href="/">
                    <ion-icon name="logo-twitter"></ion-icon>
                    </a>
                        </li>
                    </ul>
                   
                </div>
            </div>
            <form className="form">

            </form>
        </div>
    </div>
  )
}

export default About;
