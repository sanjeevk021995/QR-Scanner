import React, { useState } from "react";
import "./ContactUs.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Plane from "../assets/plane.png";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("All fields are required");
    } else {
      setFormError("");
      console.log("Form submitted", formData);
      alert("Message sent successfully!");
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="git">
          <h2>CONTACT US</h2>
        </div>

        <section className="uf-contact-form-01 mx-auto">
          <div>
            <div className="row justify-content-center bg-white rounded-4 shadow py-5 gx-5 px-lg-5">
              <div className="col-md-6 text-center">
                <h2 className="uf-ct-01-text-primary text-uppercase fw-bold">
                  Contact Us
                </h2>
                <p>
                  We're here to help! Whether you have questions about our
                  services or need assistance with your QR code, feel free to
                  reach out.
                  <a
                    href="mailto:safeconnect@gmail.com"
                    className="text-decoration-none"
                  >
                    safeconnect@gmail.com
                  </a>
                </p>
                <img
                  src={Plane}
                  alt="Plane"
                  className="uf-img-contact-form-01 pt-4 d-md-block d-none"
                />
              </div>
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="uf-imail" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="uf-imail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div
                      id="emailHelp"
                      className="form-text uf-ct-01-text-primary"
                    >
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="uf-iname" className="form-label">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="uf-iname"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="uf-itextarea" className="form-label">
                      Your message
                    </label>
                    <textarea
                      className="form-control"
                      id="uf-itextarea"
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  {formError && <p className="error-message">{formError}</p>}
                  <button type="submit" className="send-message">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* <section id="social-links">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </section> */}
      </div>
    </>
  );
};

export default ContactUs;
