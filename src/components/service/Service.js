import React from "react";
import "./service.css";
import six from "../../assests/gallery/Gallery-6 (1).jpg";
import seven from "../../assests/gallery/Gallery-7 (1).jpg";
import fifteen from "../../assests/gallery/Gallery-15 (1).jpg";
import eightteen from "../../assests/gallery/Gallery-18 (1).jpeg";

function Service() {
  return (
    <>
      <div className="service-container">
        <div className="empty-container"></div>
        <div className="information-container">
          <div className="commercial-container">
            <div className="service-item">
              <div className="image-container">
                <img src={eightteen} alt="" />
              </div>
              <div className="text-container">
                <p>Commercial</p>
              </div>
            </div>
            <div className="service-item">
              <div className="image-container">
                <img src={seven} alt="" />
              </div>
              <div className="text-container">
                <p>Commercial</p>
              </div>
            </div>
          </div>
          <div className="residential-container">
            <div className="service-item">
              <div className="image-container">
                <img src={six} alt="" />
              </div>
              <div className="text-container">
                <p>Residential</p>
              </div>
            </div>
            <div className="service-item">
              <div className="image-container">
                <img src={fifteen} alt="" />
              </div>
              <div className="text-container">
                <p>Residential</p>
              </div>
            </div>
          </div>
        </div>
        <div className="empty-container"></div>
      </div>
    </>
  );
}

export default Service;
