import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <a href="/" className="logo">
            Glass NY
          </a>

          <p className="footer-text">
            Loreum loreum loreum loreum loreum loreum loreum loreum loreum loreum
          </p>
        </div>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Our Services</p>
          </li>

          <li>
            <a href="/" className="footer-link">
              Commersial
            </a>
          </li>

          <li>
            <a href="/" className="footer-link">
              Residential
            </a>
          </li>
        </ul>
        <ul className="footer-list">
          <li>
            <p className="footer-list-title">Company</p>
          </li>

          <li>
            <a href="/" className="footer-link">
              About Company
            </a>
          </li>

          <li>
            <a href="/" className="footer-link">
              Our Services
            </a>
          </li>

          <li>
            <a href="/" className="footer-link">
              Our Work
            </a>
          </li>

          <li>
            <a href="/" className="footer-link">
              Contact Us
            </a>
          </li>
        </ul>
        <ul id="contact" className="footer-list">
          <li>
            <p className="footer-list-title">Contact Us</p>
          </li>

          <li className="footer-item">
            <ion-icon name="location" aria-hidden="true"></ion-icon>

            <address className="contact-link address">
              Loream loream loream loream loream
            </address>
          </li>

          <li className="footer-item">
            <ion-icon name="call" aria-hidden="true"></ion-icon>

            <a href="tel:+xxx-xxx-xxxx" className="contact-link">
              +x xxx-xxx-xxxx
            </a>
          </li>
          <li className="footer-item">
            <ion-icon name="call" aria-hidden="true"></ion-icon>

            <a href="tel:+xxx-xxx-xxxx" className="contact-link">
              +x xxx-xxx-xxxx
            </a>
          </li>

          <li className="footer-item">
            <ion-icon name="mail" aria-hidden="true"></ion-icon>

            <a href="mailto:xxx@xxx.x" className="contact-link">
              xxxxxx@xxxx.xx
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
