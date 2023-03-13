import React from "react";
import "./commercial.css";
import test from "../../assests/gallery/test.jpg";
import sampleFifteen from "../../assests/samples/sample-15.jpeg";


function Commercial() {
  return (
    <>
      <div className="commercial-section-container">
        <div className="commercial-left">
          <h2>Commercial</h2>
          <h2>Partitions</h2>
          <div className="text-element">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        <div className="commercial-right">
            <img src={test} alt="" />
        </div>
      </div>
      <div className="commercial-section-container">
      <div className="commercial-right">
            <img src={sampleFifteen} alt="" />
        </div>
        <div className="commercial-left-second">
          <h2>Residential</h2>
          <h2>Partitions</h2>
          <div className="text-element">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Commercial;
