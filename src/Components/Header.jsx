import "../Styles/Header.css";
import logo from "../assets/portfolio.png";

function Header() {
  return (
    <header className="header">

      <div className="logo-section">

        <img src={logo} alt="Logo" className="logo" />

        <h2 className="logo-name">
          <span>SAIKIRAN</span>
        </h2>

      </div>

      <nav>

        <ul className="nav-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#experience">Experience</a></li>

          <li><a href="#techstack">Tech Stack</a></li>

          <li><a href="#projects">Projects</a></li>


          <li><a href="#certificates">Certificates</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

      </nav>

    </header>
  );
}

export default Header;