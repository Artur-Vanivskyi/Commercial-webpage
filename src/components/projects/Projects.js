import React from "react";
import "./projects.css";
import sampleOne from "../../assests/samples/sample-11.jpeg";
import sampleTwo from "../../assests/samples/sample-12.jpeg";
import sampleThree from "../../assests/samples/sample-13.jpeg";
import sampleFour from "../../assests/samples/sample-14.jpeg";
import sampleFive from "../../assests/samples/sample-9.jpeg";
import sampleSix from "../../assests/samples/sample-5.jpeg";

function Projects() {
  return (
    <>
      <div className="projects-container" id="our-projects">
        <div className="projects-caption">
          <h2>Our Projects</h2>
        </div>

        <div className="projects-list">
          <div className="list-item">
            <img src={sampleOne} alt="" />
          </div>
          <div className="list-item">
            <img src={sampleTwo} alt="" />
          </div>
          <div className="list-item">
            <img src={sampleThree} alt="" />
          </div>
        </div>
        <div className="projects-list bottom">
          <div className="list-item">
            <img src={sampleFour} alt="" />
          </div>
          <div className="list-item">
            <img src={sampleFive} alt="" />
          </div>
          <div className="list-item">
            <img src={sampleSix} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
