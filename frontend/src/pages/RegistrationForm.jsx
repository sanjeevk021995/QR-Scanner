import React, { useState } from "react";
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
  });

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

    if (!formData.fullName.trim()) {
      errors.fullName = "Full Name is required";
    }

    if (!formData.email || !emailRegex.test(formData.email)) {
      errors.email = "Invalid email format";
    }

    if (!formData.mobile || !mobileRegex.test(formData.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    if (!formData.birthDate) {
      errors.birthDate = "Birth date is required";
    }

    if (!formData.gender) {
      errors.gender = "Please select a gender";
    }

    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }

    if (!formData.country) {
      errors.country = "Please select a country";
    }

    if (!formData.postalCode || !postalRegex.test(formData.postalCode)) {
      errors.postalCode = "Invalid postal code";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage("Please fix the errors before submitting.");
      return;
    }

    setMessage("Registering...");

    // Uncomment this to integrate with backend API
    // try {
    //   const response = await fetch("http://127.0.0.1:8000/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await response.json();

    //   if (response.ok) {
    //     setMessage(data.message);
    //   } else {
    //     setMessage(`Error: ${data.detail}`);
    //   }
    // } catch (error) {
    //   setMessage("Server error. Please try again.");
    // }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="registration-form">
        <h2>Sign Up</h2>

        <label>Full Name</label>
        <input
          type="text"
          name="fullName"
          placeholder="Enter full name"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label>Email Address</label>
        <input
          type="email"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Mobile Number</label>
        <input
          type="tel"
          name="mobile"
          placeholder="Enter mobile number"
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
          />
          <label>Male</label>

          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          <label>Female</label>

          <input
            type="radio"
            name="gender"
            value="Prefer not to say"
            onChange={handleChange}
          />
          <label>Prefer not to say</label>
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        <label>Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter address"
          value={formData.address}
          onChange={handleChange}
        />
        {errors.address && <p className="error">{errors.address}</p>}

        <div className="country-postal">
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

          <input
            type="text"
            name="postalCode"
            placeholder="Enter postal code"
            value={formData.postalCode}
            onChange={handleChange}
          />
          {errors.postalCode && <p className="error">{errors.postalCode}</p>}
        </div>

        <button type="submit">Submit</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

// ✅ Correct ES6 export
export default RegistrationForm;
