import React, { useState } from "react";
import "./Sidebar.css";
import Navbar from "../Navbar";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar />
      <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <button className="toggle-btn" onClick={() => setCollapsed(!collapsed)}>
          ☰
        </button>
        <a href="#" className="sidebar-title">
          {collapsed ? "S" : ""}
        </a>
        <hr />
        <ul className="sidebar-nav">
          <li>
            <a href="#">{collapsed ? "📊" : "Profile"}</a>
          </li>
          <li>
            <a href="#">{collapsed ? "📦" : "Records"}</a>
          </li>
          <li>
            <a href="#">{collapsed ? "🛍️" : "Summary"}</a>
          </li>
          <li>
            <a href="#">{collapsed ? "👥" : "QR Code Modification"}</a>
          </li>
        </ul>
        <hr />

        {/* Logout Button at the Bottom */}
        <button className="logout-btn" onClick={handleLogout}>
          {collapsed ? "🚪" : "Logout"}
        </button>
      </div>
    </>
  );
}

export default Sidebar;
