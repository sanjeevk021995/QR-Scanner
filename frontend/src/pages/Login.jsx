import React, { useState, useContext } from "react";
import { loginUser } from "../api/auth";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(""); // Updated to email
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
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

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const data = await loginUser(email, password);
      login(data);
      console.log("Login successful", data);

      // Redirect based on user type
      if (data.user_type === "master_admin") {
        navigate("/master-admin-dashboard");
      } else if (data.user_type === "staff") {
        navigate("/staff-dashboard");
      } else {
        navigate("/user-dashboard");
      }
    } catch (err) {
      console.error("Login failed", err);
      alert("Login failed. Please check your credentials.");
    }
  };

  const handleSignUp = () => {
    navigate("/register"); // Redirect to signup page
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password clicked");
    navigate("/forgot-password"); // Redirect to forgot password page
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSignIn}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError && <p className="error-message">{emailError}</p>}
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
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <button
            type="button"
            className="sign-up-button"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>

      <button className="forgot-password-button" onClick={handleForgotPassword}>
        Forgot Password?
      </button>
    </div>
  );
};

export default Login;
