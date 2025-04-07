import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="#about">Our Story</a>
            </li>
            <li>
              <a href="#mission">Our Mission</a>
            </li>
            <li>
              <a href="#vision">Our Vision</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
            <li>
              <a href="#generate">Generate QR Code</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Stay Connected</h3>
          <ul>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="footer-hr" />
      <div className="copyright">
        <p>&copy; 2025 SafeConnect. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
