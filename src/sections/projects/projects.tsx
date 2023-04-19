import React from "react";

import { codingProjects } from "../../data/codingProjects";

import ProjectList from "../../components/project-list/project-list";

import "./projects.scss";

export default function ProjectsSection() {
  return (
    <div className="projects-section container">
      <h1>Projects</h1>

      <ProjectList projects={codingProjects} />
    </div>
  );
}
