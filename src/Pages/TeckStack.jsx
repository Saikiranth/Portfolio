import React from "react";
import "../Styles/TechStack.css";

function TechStack() {
  const skills = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "JPA",
    "REST APIs",
    "MySQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Bootstrap",
    "Git",
    "GitHub",
    "Maven",
    "VS Code",
    "Eclipse",
  ];

  return (
    <section className="tech-stack" id="techstack">
      <div className="tech-heading">
        <h4>MY SKILLS</h4>

        <h1>
          Tech <span>Stack</span>
        </h1>

        <p>
          Technologies, frameworks, and tools I use to build modern,
          responsive, and scalable web applications.
        </p>
      </div>

      <div className="tech-container">
        {skills.map((skill, index) => (
          <div className="tech-card" key={index}>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechStack;