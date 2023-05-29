import React, { useEffect } from "react";

import About from "./components/about/About";
import Commercial from "./components/commercial/Commercial";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";

import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";

import Service from "./components/service/Service";
import WorkProcess from "./components/work-process/WorkProcess";

import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

var overscrollOptions = {
  enable : false,
  effect: "bounce",
  damping: 0.1,
  maxOverscroll: 150,
};

const options = {
  damping: 0.03,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

function App() {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.body, options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.body);
    };
  }, []);

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);
  
  return (
    <div className="app">
      <Home />

      <Service />

      <Projects />

      <Commercial />

      <Gallery />

      <WorkProcess />

      <About />

      <Footer />
    </div>
  );
}

export default App;
