import React, { useEffect, useState } from "react";
import "../Styles/Certificates.css";

function Certificates() {
  const certificates = [
    {
      title: "Java Full Stack ",
      image: "/Java_Cirtificate.jpg",
    },
    {
      title: "Kakatiya University Certificates",
      image: "/Ku_Cirtificate.jpeg",
    },
    {
      title: "Kakatiya University  Contribution Certificate",
      image: "/Ku_Contribution_Cirtificate.jpeg",
    },
    {
      title: "Earth Sciences University of Telangana University Certificate",
      image: "/ESUT_Cirtificate.jpg",
    },
    {
      title: "Earth Sciences University of Telangana Contribution Certificate",
      image: "/ESUT_Cirtificate.jpg",
    },
    {
      title: "Introduction To Python",
      image: "/Python .png",
    },
    {
      title: "UNXT(Infosys Foundation) Certificate",
      image: "/Softskill.png",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % certificates.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [certificates.length]);

  const visible = [
    certificates[index],
    certificates[(index + 1) % certificates.length],
  ];

  return (
    <section className="certificates" id="certificates">
      <div className="certificate-heading">
        <h4>MY ACHIEVEMENTS</h4>

        <h1>
          My <span>Certificates</span>
        </h1>

        <p>
          Professional certifications and achievements earned during my learning
          journey.
        </p>
      </div>

      <div className="certificate-container">
        {visible.map((certificate, i) => (
          <div className="certificate-card" key={i}>
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-image"
            />

            <h2>{certificate.title}</h2>

            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-btn"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
