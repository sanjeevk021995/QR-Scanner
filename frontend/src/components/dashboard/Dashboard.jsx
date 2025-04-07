import React from "react";
import Sidebar from "./Sidebar";
import DashNavbar from "./DashNavbar";
import Navbar from "../Navbar";
import Profile from "../../pages/Profile";

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Profile />
    </div>
  );
}

export default Dashboard;
