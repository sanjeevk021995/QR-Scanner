import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [editMode, setEditMode] = useState({
    profile: false,
    details: false,
    social: false,
    progress: false,
  });

  const [userData, setUserData] = useState({
    fullName: "John Doe",
    jobTitle: "Full Stack Developer",
    location: "Bay Area, San Francisco, CA",
    email: "fip@jukmuh.al",
    phone: "(239) 816-9029",
    mobile: "(320) 380-4539",
    address: "Bay Area, San Francisco, CA",
    website: "https://bootdey.com",
    github: "bootdey",
    twitter: "@bootdey",
    instagram: "bootdey",
    facebook: "bootdey",
    progress: {
      "Web Design": 80,
      "Website Markup": 70,
      "One Page": 60,
      "Mobile Template": 50,
      "Backend API": 90,
    },
  });

  const toggleEdit = (section) => {
    setEditMode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-container">
      {/* Profile Card */}
      <div className="profile-card">
        <img src="/profile-pic.png" alt="Profile" className="profile-img" />
        {editMode.profile ? (
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleChange}
          />
        ) : (
          <h2>{userData.fullName}</h2>
        )}
        <p>{userData.jobTitle}</p>
        <p>{userData.location}</p>
        <button className="follow-btn">Follow</button>
        <button className="message-btn">Message</button>
        <button className="edit-btn" onClick={() => toggleEdit("profile")}>
          {editMode.profile ? "Save" : "Edit"}
        </button>
      </div>

      {/* Details Card */}
      <div className="details-card">
        <h3>
          User Details
          <button className="edit-btn" onClick={() => toggleEdit("details")}>
            {editMode.details ? "Save" : "Edit"}
          </button>
        </h3>
        <p>
          <strong>Email:</strong>{" "}
          {editMode.details ? (
            <input
              type="text"
              name="email"
              value={userData.email}
              onChange={handleChange}
            />
          ) : (
            userData.email
          )}
        </p>
        <p>
          <strong>Phone:</strong>{" "}
          {editMode.details ? (
            <input
              type="text"
              name="phone"
              value={userData.phone}
              onChange={handleChange}
            />
          ) : (
            userData.phone
          )}
        </p>
        <p>
          <strong>Mobile:</strong>{" "}
          {editMode.details ? (
            <input
              type="text"
              name="mobile"
              value={userData.mobile}
              onChange={handleChange}
            />
          ) : (
            userData.mobile
          )}
        </p>
        <p>
          <strong>Address:</strong>{" "}
          {editMode.details ? (
            <input
              type="text"
              name="address"
              value={userData.address}
              onChange={handleChange}
            />
          ) : (
            userData.address
          )}
        </p>
      </div>

      {/* Social Links Card */}
      <div className="social-card">
        <h3>
          Social Links
          <button className="edit-btn" onClick={() => toggleEdit("social")}>
            {editMode.social ? "Save" : "Edit"}
          </button>
        </h3>
        {Object.entries(userData)
          .filter(([key]) =>
            ["website", "github", "twitter", "instagram", "facebook"].includes(
              key
            )
          )
          .map(([key, value]) => (
            <p key={key}>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {editMode.social ? (
                <input
                  type="text"
                  name={key}
                  value={value}
                  onChange={handleChange}
                />
              ) : (
                value
              )}
            </p>
          ))}
      </div>

      {/* Progress Status Card */}
      <div className="progress-card">
        <h3>
          Project Status
          <button className="edit-btn" onClick={() => toggleEdit("progress")}>
            {editMode.progress ? "Save" : "Edit"}
          </button>
        </h3>
        {Object.entries(userData.progress).map(([task, progress]) => (
          <div key={task} className="progress-bar">
            <p>{task}</p>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
