import React from "react";
import "../Styles/Experience.css";

function Experience() {
  return (
    <section className="experience" id="experience">

      <div className="experience-heading">
        <h4>MY JOURNEY</h4>

        <h1>
          Work <span>Experience</span>
        </h1> 
      </div>

      <div className="timeline">

        {/* Current Experience */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <h2>Java Learning Enabler</h2>

            <h3>Digit IT | Hyderabad</h3>

            <span>July 2026 - Present</span>

            <p>
              Deliver training on Java Full Stack technologies including
              Core Java, Advanced Java, JDBC, Servlets, JSP,
              Spring Boot, Hibernate, REST APIs, MySQL,
              HTML, CSS, JavaScript, and React.js.
            </p>

            <p>
              Mentor students through practical coding sessions,
              debugging, and real-world projects while promoting
              industry best practices in full-stack development.
            </p>

          </div>

        </div>

        {/* Internship */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="timeline-content">

            <h2>Frontend Developer Intern</h2>

            <h3>Video360</h3>

            <span>Internship</span>

            <p>
              Worked as a Frontend Developer Intern and contributed to the
              development of the Video360 web application using React.js,
              Bootstrap, HTML, CSS, and JavaScript.
            </p>

            <p>
              Designed responsive user interfaces, improved website
              performance, implemented reusable components, and collaborated
              with the development team to deliver a modern user experience.
            </p>

            <div className="buttons">
            
            <a href="https://github.com/Saikiranth/Video360" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;