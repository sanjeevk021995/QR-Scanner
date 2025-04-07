import React from "react";
import Hero from "../assets/mainBanner.jpg";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="header-container">
        <h1>
          <strong>Welcome to SafeConnect</strong> - Your Safety in the Palm of
          Your Hand
        </h1>
      </div>
      <div className="hero-section">
        <div class="hero-container">
          <img src={Hero} alt="" class="hero-image" />

          <button class="button">Generate Your QR Code Now</button>
        </div>
        <div>
          <div className="card-1">
            {" "}
            <h2>How It Works</h2>
          </div>
          <div class="cards-container">
            <div class="card">
              <h3>Step 1- Register with SafeConnect</h3>
              <hr class="divider" />
              <p>
                Register with SafeConnect , login to portal and crete your
                profile.
              </p>
            </div>
            <div class="card">
              <h3>Step 2 -Create Your QR Code: </h3>
              <hr class="divider" />
              <p>
                Enter your basic details and emergency contact information into
                our easy-to-use form
              </p>
            </div>
            <div class="card">
              <h3>Step 3 - Customize Your QR Code : </h3>
              <hr class="divider" />
              <p>Choose the details which you want to show by QR code</p>
            </div>
            <div class="card">
              <h3>Step 4 - Print and Wear:</h3>
              <hr class="divider" />
              <p>
                Print your QR code on a keychain, ring, or any wearable item
                that suits you best
              </p>
            </div>
          </div>

          <div class="card-1">
            <h3>Why Choose SafeConnect?</h3>
            <hr class="divider" />
            <ul>
              <li>
                <strong>Peace of Mind:</strong> Know that your loved ones can be
                reached quickly if needed.
              </li>
              <li>
                <strong>Convenience:</strong> No need to carry bulky cards or
                remember complex contact details.
              </li>
              <li>
                <strong>Accessibility:</strong> Anyone with a smartphone can
                scan your QR code and connect with your emergency contacts.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="card">
        <h3>
          <strong>Get Started Today!</strong>
        </h3>
        <p>
          Take the first step towards ensuring your safety and the peace of mind
          of those around you. Generate your emergency QR code now and stay
          connected in case of an emergency.
        </p>
      </div>
      <hr />
    </>
  );
}

export default Home;
