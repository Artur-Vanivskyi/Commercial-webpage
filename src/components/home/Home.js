import React from "react";
import HomeRight from "./home-right/HomeRight";
import HomeLeft from "./home-left/HomeLeft";
import "./home.css";

function Home() {
  return (
    <section className="home-container">
      <HomeLeft />

      <HomeRight />
    </section>
  );
}

export default Home;
