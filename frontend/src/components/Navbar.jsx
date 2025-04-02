import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png"; // Replace with your actual logo path
import AuthContext from "../context/AuthContext";

function Navbar() {
  const { token } = useContext(AuthContext);
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
          {/* Conditionally show Profile link if the user is logged in */}
          {token ? (
            <>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <button>Logout</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">Sign In</Link>
            </li>
          )}

          {/* <li>
            <Link to="/register">Sign Up</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
