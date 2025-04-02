import React, { useState } from "react";
import "./Sidebar.css";
import Navbar from "../Navbar";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

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
            <a href="#" className="active">
              {collapsed ? "🏠" : "Home"}
            </a>
          </li>
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
        <div className="user-dropdown">
          <a href="#" className="dropdown-toggle">
            <img
              src="https://github.com/mdo.png"
              alt="User"
              className="user-img"
            />
            {!collapsed && <strong>mdo</strong>}
          </a>
          <ul className="dropdown-menu">
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
            <li>
              <hr />
            </li>
            <li>
              <a href="#">Sign out</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
