import React from "react";
import "../Styles/Contact.css";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <div className="contact-heading">
        <h4>GET IN TOUCH</h4>

        <h1>
          Contact <span>Me</span>
        </h1>

        <p>
          Feel free to reach out for job opportunities, internships,
          freelance work, or collaboration. I'd be happy to connect with you.
        </p>
      </div>

      <div className="contact-container">

        {/* Left Side */}

        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>saikiranthammali965@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhoneAlt className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9014157920</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Location</h3>
              <p>Medak, Telangana, India</p>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://linkedin.com/in/thammali-saikiran965"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Saikiranth"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>

        </div>

        {/* Right Side */}

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            required
          />

          <input
            type="text"
            placeholder="Subject"
            required
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;