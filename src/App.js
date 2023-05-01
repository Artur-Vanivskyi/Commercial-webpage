import React from "react";

import About from "./components/about/About";
import Commercial from "./components/commercial/Commercial";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
// import Header from './components/header/Header';
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

import Service from "./components/service/Service";
import WorkProcess from "./components/work-process/WorkProcess";

function App() {
  return (
    <>
      <Home />

      <Service />

      <Projects />

      <Commercial />

      <Gallery />

      <WorkProcess />

      <About />

      <Footer />
    </>
  );
}

export default App;
