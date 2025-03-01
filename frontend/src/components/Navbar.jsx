import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Replace with your actual logo path

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo on the left */}
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Navigation Links */}
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
