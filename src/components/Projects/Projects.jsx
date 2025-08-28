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
    title: "FreshBasket",
    desc: "A modern, user-friendly online grocery platform that allows customers to shop for fresh fruits, vegetables, and essentials from the comfort of their home.",
    live: 'https://github.com/HarshavardhanReddy-Nusum/Fresh-Basket',
    code: "https://github.com/HarshavardhanReddy-Nusum/Fresh-Basket"
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
