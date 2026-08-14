import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "Wanderlust",
    desc: "A travel booking platform with EJS, Node.js, and MongoDB.",
    live: "https://wanderlust-ug0z.onrender.com/listings",
    code: "https://github.com/HarshavardhanReddy-Nusum/Wanderlust"
  },
  {
    title: "E-Commerce-platform",
    desc: "A modern, user-friendly online platform that allows customers to shop for essentials from the comfort of their home.",
    live: 'https://e-commerce-platform-nine-ruddy.vercel.app/',
    code: "https://github.com/HarshavardhanReddy-Nusum/E-commerce-platform"
  },
  {
    title: "FreshBasket",
    desc: "A modern, user-friendly online grocery platform that allows customers to shop for fresh fruits, vegetables, and essentials from the comfort of their home.",
    live: 'https://github.com/HarshavardhanReddy-Nusum/Fresh-Basket',
    code: "https://github.com/HarshavardhanReddy-Nusum/Fresh-Basket"
  },
  {
    title: "Hospital Management System",
    desc: "A console-based Hospital Management System developed using Java, JDBC, and MySQL to manage essential hospital operations such as patient records, doctor information, appointments, and billing.",
    live: 'https://github.com/HarshavardhanReddy-Nusum/Hospital-Management-System',
    code: "https://github.com/HarshavardhanReddy-Nusum/Hospital-Management-System"
  },
  {
    title: "Portfolio",
    desc: "My personal portfolio built using React.",
    live: "https://portfolio-lcxv.onrender.com",
    code: "https://github.com/HarshavardhanReddy-Nusum/Portfolio/tree/portfolio"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="projects-title">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h2>{project.title}</h2>
            <p>{project.desc}</p>
            <div className="project-buttons">
              {project.live && (
                <button
                  className="btn live-btn"
                  onClick={() => window.open(project.live, "_blank")}
                >
                  Live Demo
                </button>
              )}
              {project.code && (
                <button
                  className="btn code-btn"
                  onClick={() => window.open(project.code, "_blank")}
                >
                  View Code
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
