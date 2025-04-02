import React, { useState } from "react";
import { resetPassword } from "../api/auth"; // Import API function
import { useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token"); // Get token from URL

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setPasswordError("");
    setMessage("");

    if (!newPassword.trim() || newPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      return;
    }

    try {
      const response = await resetPassword(token, newPassword);
      if (response.success) {
        setMessage("Password reset successful. Redirecting to login...");
        setTimeout(() => navigate("/login"), 3000);
      } else {
        setPasswordError("Invalid or expired reset token.");
      }
    } catch (err) {
      console.error("Reset failed", err);
      setPasswordError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <div className="input-group">
          <label htmlFor="new-password">New Password:</label>
          <input
            type="password"
            id="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {passwordError && <p className="error-message">{passwordError}</p>}

        <button type="submit" className="sign-in-button">
          Reset Password
        </button>
      </form>

      {message && <p className="success-message">{message}</p>}
    </div>
  );
};

export default ResetPassword;
