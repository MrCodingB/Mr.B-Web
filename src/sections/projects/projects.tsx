import React from "react";

import { codingProjects } from "../../data/codingProjects";

import ProjectCard from "../../components/project-card/project-card";

import "./projects.scss";

export default function ProjectsSection() {
  return (
    <div className="projects-section container">
      <h1>Projects</h1>

      <div className="project-list">
        {codingProjects.map((p, i) => (
          <ProjectCard key={i} project={p} />
        ))}
      </div>
    </div>
  );
}
