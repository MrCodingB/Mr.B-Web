import { Component } from "react";
import { Project } from "../../models/project";

import ImageCarusel from "../image-carusel/image-carusel";
import MarkdownText from "../markdown-text/markdown-text";

import "./project-card.scss";

export interface ProjectCardProperties {
  project: Project;
}

export default class ProjectCard extends Component<ProjectCardProperties> {
  get project(): Project {
    return this.props.project;
  }

  render() {
    return (
      <div className="project-card">
        <div className="images">
          <ImageCarusel images={this.project.images} />
        </div>

        <div className="content">
          <MarkdownText text={this.project.content} />
        </div>
      </div>
    );
  }
}
