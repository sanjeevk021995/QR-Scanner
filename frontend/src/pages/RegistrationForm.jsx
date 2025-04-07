import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    birthDate: "",
    gender: "",
    address: "",
    country: "",
    postalCode: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    const postalRegex = /^[0-9]{5,6}$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!formData.fullName.trim()) errors.fullName = "Full Name is required";
    if (!formData.email || !emailRegex.test(formData.email))
      errors.email = "Invalid email format";
    if (!formData.mobile || !mobileRegex.test(formData.mobile))
      errors.mobile = "Mobile number must be 10 digits";
    if (!formData.birthDate) errors.birthDate = "Birth date is required";
    if (!formData.gender) errors.gender = "Please select a gender";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.country) errors.country = "Please select a country";
    if (!formData.postalCode || !postalRegex.test(formData.postalCode))
      errors.postalCode = "Invalid postal code";
    if (!formData.password || !passwordRegex.test(formData.password))
      errors.password =
        "Password must be at least 6 characters and contain letters and numbers";
    if (formData.password !== formData.confirmPassword)
      errors.confirmPassword = "Passwords do not match";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Please fix the errors before submitting.");
      return;
    }

    dispatch(register(formData));
    alert("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="registration-form">
          <h2>Sign Up</h2>

          <label>Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}

          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label>Mobile Number</label>
          <input
            type="tel"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          <label>Birth Date</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          {errors.birthDate && <p className="error">{errors.birthDate}</p>}

          <label>Gender</label>
          <div className="gender-options">
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
            />{" "}
            Male
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
            />{" "}
            Female
            <input
              type="radio"
              name="gender"
              value="Prefer not to say"
              onChange={handleChange}
            />{" "}
            Prefer not to say
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}

          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && <p className="error">{errors.address}</p>}

          <label>Country</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="India">India</option>
            <option value="UK">UK</option>
          </select>
          {errors.country && <p className="error">{errors.country}</p>}

          <label>Postal Code</label>
          <input
            type="text"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          <button type="submit">Submit</button>
          {message && <p className="message">{message}</p>}
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
