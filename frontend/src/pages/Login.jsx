import React, { useState } from "react";
import "./Login.css";

import { useNavigate } from "react-router-dom"; // Import useNavigate

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate(); // Initialize useNavigate
  const validateForm = () => {
    let isValid = true;
    setUsernameError("");
    setPasswordError("");

    if (!username.trim()) {
      setUsernameError("Username is required");
      isValid = false;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSignIn = () => {
    if (validateForm()) {
      // Implement your sign-in logic here
      console.log("Signing in with:", username, password);
      // Example: Check credentials against a database or API
    }
  };

  const handleSignUp = () => {
    navigate("/register"); // Redirect to the signup page
  };

  const handleForgotPassword = () => {
    // Implement forgot password logic
    console.log("Forgot Password clicked");
    // Example: Redirect to a password reset page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError && <p className="error-message">{usernameError}</p>}
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error-message">{passwordError}</p>}
      </div>
      <div className="button-group">
        <button className="sign-in-button" onClick={handleSignIn}>
          Sign In
        </button>
        <button className="sign-up-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </div>
      <button className="forgot-password-button" onClick={handleForgotPassword}>
        Forgot Password?
      </button>
    </div>
  );
}

export default Login;
