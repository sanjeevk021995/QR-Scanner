import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import QRCodeSettings from "../components/QRCodeSettings";
import { logout } from "../redux/authSlice";
import "./Profile.css";

const Profile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [address, setAddress] = useState(user?.address || "");
  const [height, setHeight] = useState(user?.height || "");
  const [weight, setWeight] = useState(user?.weight || "");
  const [bloodType, setBloodType] = useState(user?.bloodType || "");
  const [allergies, setAllergies] = useState(user?.allergies || "");

  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [isEditingHealth, setIsEditingHealth] = useState(false);

  const toggleEditProfile = () => setIsEditingProfile(!isEditingProfile);
  const toggleEditHealth = () => setIsEditingHealth(!isEditingHealth);

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
    <div>
      <h2 className="user-profile-heading">User Profile</h2>
      <div className="container-profile">
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
            <QRCodeSettings userData={userData} />
          </div>

          <div className="col-md-8">
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
                  <div className="col-sm-9 text-secondary">{email}</div>
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
                  <div className="col-sm-9 text-secondary">{height}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Weight</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{weight}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Blood Type</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{bloodType}</div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <h6 className="mb-0">Allergies</h6>
                  </div>
                  <div className="col-sm-9 text-secondary">{allergies}</div>
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
