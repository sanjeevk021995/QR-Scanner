import React, { useState } from "react";
import { forgotPassword } from "../api/auth"; // Import API function
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setEmailError("");
    setMessage("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    try {
      const response = await forgotPassword(email);
      if (response.success) {
        setMessage("Check your email for a reset link.");
        setTimeout(() => navigate("/reset-password"), 3000);
      } else {
        setEmailError("Email not found.");
      }
    } catch (err) {
      console.error("Error sending reset request", err);
      setEmailError("Something went wrong. Try again later.");
    }
  };

  return (
    <div className="container-forgotPassword">
      <div className="login-container">
        <h2>Forgot Password</h2>
        <form onSubmit={handleForgotPassword}>
          <div className="input-group">
            <label htmlFor="email">Enter your email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>

          <button type="submit" className="sign-in-button">
            Send Reset Link
          </button>
        </form>

        {message && <p className="success-message">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
