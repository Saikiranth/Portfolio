import React from "react";
import "../Styles/Project.css";

function Project() {
  return (
    <section className="projects" id="projects">
      <div className="project-heading">
        <h4>MY WORK</h4>

        <h1>
          Featured <span>Projects</span>
        </h1>

        <p>
          Here are some of the projects that showcase my skills in Java Full
          Stack Development, Frontend Development, and Responsive Web Design.
        </p>
      </div>

      <div className="project-container">

        {/* Project 1 */}

        <div className="project-card">
         

          <div className="project-content">
            <h2>ShopEase</h2>

            <h4>Java Full Stack E-Commerce Application</h4>

            <p>
              Developed a full-stack e-commerce web application with user
              authentication, product management, shopping cart, order
              processing, and payment functionality. Designed an intuitive and
              responsive user interface to provide a seamless shopping
              experience across different devices. Implemented real-time cart
              updates to enhance usability and overall user experience.
            </p>

            <div className="tech">
              <span>Java</span>
              <span>Spring Boot</span>
              <span>Maven</span>
              <span>REST APIs</span>
              <span>Hibernate JPA</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>

            <div className="buttons">
              <a
                href="https://github.com/Saikiranth/Easy_Shop"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
               <a
                href="https://easy-shop-1-u9k3.onrender.com/register"
                target="_blank"
                rel="noopener noreferrer"
                className="btn">
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}

        <div className="project-card">
          

          <div className="project-content">
            <h2>Smart Travel</h2>

            <h4>Tour Package Booking Platform</h4>

            <p>
              Developed a responsive travel booking application that allows
              users to explore tourist destinations, browse travel packages,
              and book trips through an intuitive interface. The application
              provides destination details, pricing, images, and package
              information for a smooth travel planning experience.
            </p>

            <div className="tech">
              <span>PHP</span>
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>

            <div className="buttons">
              <a
                href="https://github.com/Saikiranth/smart-travel1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
              <a
                href="https://smart-travel1-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Live
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}

        <div className="project-card">
          

          <div className="project-content">
            <h2>University Websites</h2>

            <h4>Educational Web Portals</h4>

            <p>
              Designed and developed responsive university websites featuring
              course information, faculty details, admission services, events,
              notices, and online payment modules. The websites provide an
              organized and user-friendly experience for students, faculty, and
              administrators.
            </p>

            <div className="tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>MySQL</span>
            </div>

            <div className="buttons">
              <a href="https://github.com/Saikiranth/ESUT" className="btn" target="_blanck">
                GitHub
              </a>
              <a href="https://dresut.vercel.app/" className="btn" target="_blanck">
                Live
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Project;