import React, { useState } from "react";
import "./about.css";

function About() {
  const initialFormState = {
    name: "",
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted", formData);
    setFormData(initialFormState);
  };

  return (
    <div className="about-container">
      <div className="about-left-container">
        <div className="about-caption">
          <div className="caption">About <span style={{color: "red", paddingLeft: "10px"}}>Us</span></div>
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
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="form-input"
            id="name"
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="form-input"
            id="mobile_number"
            type="text"
            name="mobile_number"
            placeholder="xxx-xxx-xxxx"
            required
            value={formData.mobile_number}
            onChange={handleChange}
          />
          <input
            className="form-input"
            id="email"
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="form-input"
            id="message"
            type="text"
            name="message"
            rows="1"
            placeholder="Looking For"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" className="button">
            DONE
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
