import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import Registration from "./pages/RegistrationForm";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import HealthcareDashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        {/* <Route path="/dashboard" element={<HealthcareDashboard />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
