import React from "react";
import "../Styles/Home.css";
import profile from "../assets/profile.jpg";

function Home() {
  return (
    <section className="home" id="home">

      <div className="overlay"></div>

      <div className="left">

        <p className="welcome">
          WELCOME TO MY PORTFOLIO
        </p>

        <h1>
          THAMMALI <br />
          <span>SAIKIRAN</span>
        </h1>

        <h3>
          Web Developer <span>|</span> Frontend Developer
        </h3>

        <p className="description">
          Passionate Web Developer with expertise in HTML,
          CSS, JavaScript, React.js, Java, Spring Boot
          and AI.
        </p>

        <div className="buttons">
          <button className="btn1">Explore Projects</button>
          <a href="#contact"><button className="btn2">Contact Me</button></a>
        </div>

      </div>

      <div className="right">

        <div className="image-box">
          <img src={profile} alt="Profile" />
        </div>

      </div>

    </section>
  );
}

export default Home;