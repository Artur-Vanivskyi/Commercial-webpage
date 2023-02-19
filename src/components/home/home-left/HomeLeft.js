import React from "react";
import HomeFooter from "./home-left-footer/HomeFooter";
import Header from "./home-left-header/Header";
import HomeMiddle from "./home-left-middle/HomeMiddle";
import "./homeleft.css";



function HomeLeft() {
  return (
   <div className="home-left-section">
    <Header />
    <HomeMiddle />
    <HomeFooter />
   </div>
  )
}

export default HomeLeft;
