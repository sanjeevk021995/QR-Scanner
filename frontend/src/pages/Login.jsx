import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authContext = useContext(AuthContext);

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

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      const userData = {
        name: storedUser.name,
        user_type: storedUser.userType,
        access: "dummy_token", // Replace with your actual token logic
        refresh: "dummy_refresh_token",
      };
      dispatch(login({ email, password }));
      authContext.login(userData); // Call login from AuthContext
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid email or password");
    }
  };

  const handleSignUp = () => {
    navigate("/register");
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  return (
    <div className="container-login-main">
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

        <button
          className="forgot-password-button"
          onClick={handleForgotPassword}
        >
          Forgot Password?
        </button>
      </div>
    </div>
  );
};

export default Login;
