import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";  // Import AuthProvider
import Registration from "./pages/RegistrationForm";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/AboutUs";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <AuthProvider> {/* Wrap everything inside AuthProvider */}
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
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
