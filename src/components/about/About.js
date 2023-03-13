import React, { useState } from "react";
import "./about.css";
import ClientForm from "./ClientForm";
import { createClient } from "../../utils/api";

function About() {
  const initialFormState = {
    full_name: "",
    mobile_number: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  console.log(formData);
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  console.log(formData);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const abortController = new AbortController();
    console.log("submitted", formData);
    
    try {
      await createClient(formData, abortController.signal);
      setFormData(initialFormState);
    } catch (err) {
      console.log(err);
    }

    return () => abortController.abort();
  };

  return (
    <div className="about-container">
      <div className="about-left-container">
        <div className="about-caption">
          <div className="caption">
            About <span style={{ color: "red", paddingLeft: "10px" }}>Us</span>
          </div>
        </div>
        <div className="about-text">
          <div className="text">
            We are here to bring you a nice fresh perspective on space division
            issue from people who love what they do!
          </div>
        </div>
      </div>
      <div className="about-right-container">
        <div className="form-top">
          <div className="top-text">
            <h2>Free</h2>
            <h2>Estimate</h2>
            <p>Get you amazing product!</p>
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
        <ClientForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default About;
