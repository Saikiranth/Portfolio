import React from "react";
import "../Styles/About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-content">

        <h4>GET TO KNOW ME</h4>

        <h1>
          About <span>Me</span>
        </h1>

        <p>
          Hello! I'm <strong>Thammali Saikiran</strong>, a passionate Computer
          Science Engineering graduate and Java Full Stack Developer from
          Medak, Telangana.
        </p>

        <p>
          I specialize in building modern, responsive, and scalable web
          applications using Java, Spring Boot, Hibernate, REST APIs, MySQL,
          HTML, CSS, JavaScript, React.js, and Bootstrap.
        </p>

        <p>
          I have developed several real-world projects, including a full-stack
          e-commerce application, a video streaming platform, and university
          websites. I enjoy solving real-world problems through clean code and
          intuitive user experiences.
        </p>

        <p>
          Currently, I work as a <strong>Java Learning Enabler</strong>, where
          I train and mentor students in Java Full Stack Development, helping
          them strengthen their technical skills through practical projects and
          coding sessions.
        </p>

        <div className="about-info">

          <div className="card">
            <h3>🎓 Education</h3>
            <p>B.Tech - Computer Science & Engineering</p>
          </div>

          

          

          <div className="card">
            <h3>💻 Specialization</h3>
            <p>Java Full Stack & Frontend Development</p>
          </div>

        </div>

        <a
          href="/Saikiran_Resume.pdf"
          download="Thammali_Saikiran_Resume.pdf"
          className="about-btn">
          Download Resume
        </a>

      </div>

    </section>
  );
}

export default About;