import React, { useState } from "react";
import QRCodeSettings from "../components/QRCodeSettings";
import "./Profile.css";

const Profile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("fip@jukmuh.al");
  const [phone, setPhone] = useState("(239) 816-9029");
  const [address, setAddress] = useState("Bay Area, San Francisco, CA");

  const [height, setHeight] = useState("5'9\" (175 cm)");
  const [weight, setWeight] = useState("70 kg");
  const [bloodType, setBloodType] = useState("O+");
  const [allergies, setAllergies] = useState("None");

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingHealth, setIsEditingHealth] = useState(false);

  const toggleEditProfile = () => setIsEditingProfile(!isEditingProfile);
  const toggleEditHealth = () => setIsEditingHealth(!isEditingHealth);

  // Collect all data
  const userData = {
    name,
    email,
    phone,
    address,
    height,
    weight,
    bloodType,
    allergies,
  };

  return (
    <div className="container">
      <h2 className="user-profile-heading">User Profile</h2>

      <div className="row gutters-sm">
        <div className="col-md-4 mb-3">
          <div className="card">
            <div className="card-body text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="User"
                className="rounded-circle"
                width="150"
              />
              <h4>{name}</h4>
            </div>
          </div>

          {/* QR Code Settings Component */}
          <QRCodeSettings userData={userData} />
        </div>

        <div className="col-md-8">
          {/* Personal Information Card */}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <h5>Personal Information</h5>
              <button className="btn-edit" onClick={toggleEditProfile}>
                {isEditingProfile ? "Save" : "Edit"}
              </button>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Full Name</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingProfile ? (
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    name
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Email</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingProfile ? (
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    email
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Phone</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingProfile ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    phone
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Address</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingProfile ? (
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    address
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Basic Health Data Card */}
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between">
              <h5>Basic Health Data</h5>
              <button className="btn-edit" onClick={toggleEditHealth}>
                {isEditingHealth ? "Save" : "Edit"}
              </button>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Height</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingHealth ? (
                    <input
                      type="text"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    height
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Weight</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingHealth ? (
                    <input
                      type="text"
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    weight
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Blood Type</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingHealth ? (
                    <input
                      type="text"
                      value={bloodType}
                      onChange={(e) => setBloodType(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    bloodType
                  )}
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-sm-3">
                  <h6 className="mb-0">Allergies</h6>
                </div>
                <div className="col-sm-9 text-secondary">
                  {isEditingHealth ? (
                    <input
                      type="text"
                      value={allergies}
                      onChange={(e) => setAllergies(e.target.value)}
                      className="form-control"
                    />
                  ) : (
                    allergies
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
