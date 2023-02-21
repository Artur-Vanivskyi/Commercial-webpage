import React from "react";
import one from "../../assests/gallery/Gallery-1 (1).jpg";
import "./projects.css";

function Projects() {
  return (
    <>
      <div className="projects-container">
        <div className="projects-caption">
          <h2>Our Projects</h2>
        </div>
        
        <div className="projects-list">
          <div className="list-item">
            <img src={one} alt="" />
          </div>
          <div className="list-item">
            <img src={one} alt="" />
          </div>
          <div className="list-item">
            <img src={one} alt="" />
          </div>
        </div>
        <div className="projects-list bottom">
          <div className="list-item">
            <img src={one} alt="" />
          </div>
          <div className="list-item">
            <img src={one} alt="" />
          </div>
          <div className="list-item">
            <img src={one} alt="" />
          </div>
        </div>
       
      </div>
    </>
  );
}

export default Projects;
