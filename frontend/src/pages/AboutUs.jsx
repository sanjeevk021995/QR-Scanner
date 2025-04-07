import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div>
      <div className="about-us-container">
        <div className="card-container">
          <section id="mission" className="card">
            <h2>About SafeConnect</h2>
            <p>
              At SafeConnect, we believe that safety and preparedness are
              essential in today's fast-paced world. Our mission is to provide a
              simple yet powerful tool that helps individuals stay connected
              with their loved ones in case of an emergency.
            </p>
          </section>

          <section id="story" className="card">
            <h2>Our Story</h2>
            <p>
              SafeConnect was founded by a team of innovators who recognized the
              importance of having quick access to emergency contact
              information. We saw how traditional methods of carrying contact
              details, such as cards or memorizing numbers, could be unreliable
              in critical situations. This led us to develop a platform where
              users can create personalized QR codes that store their essential
              details, making it easy for anyone to reach their emergency
              contacts.
            </p>
          </section>

          <section id="vision" className="card">
            <h2>Our Vision</h2>
            <p>
              Our vision is to empower individuals with a reliable and
              accessible way to share their emergency information. We strive to
              make SafeConnect a trusted name in personal safety, ensuring that
              our users feel secure and connected wherever they go.
            </p>
          </section>

          <section id="how-we-work" className="card">
            <h2>How We Work</h2>
            <ul>
              <li>
                <strong>User-Centric Approach:</strong> We focus on creating a
                user-friendly experience that makes it easy for anyone to
                generate and use their QR code.
              </li>
              <li>
                <strong>Privacy and Security:</strong> We prioritize the privacy
                and security of our users' data, ensuring that their information
                is protected and only accessible through their QR code.
              </li>
              <li>
                <strong>Continuous Improvement:</strong> We continuously update
                and improve our platform to meet the evolving needs of our
                users.
              </li>
            </ul>
          </section>

          <section id="join-community" className="card">
            <h2>Join Our Community</h2>
            <p>
              At SafeConnect, we value community and collaboration. Join us on
              social media to stay updated on our latest developments and share
              your experiences with us.
            </p>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Follow Us on Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Follow Us on Twitter
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Follow Us on Instagram
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
