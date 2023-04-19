import { Component } from "react";
import { Project } from "../../models/project";

import ImageCarusel from "../image-carusel/image-carusel";
import MarkdownText from '../markdown-text/markdown-text';

import "./project-list.scss";

export interface ProjectListProperties {
  projects: Project[];
}

export default class ProjectList extends Component<ProjectListProperties> {
  render() {
    return (
      <div className="project-list">
        {this.props.projects.map((p, i) => (
          <div className="project" key={i}>
            <div className="images">
              <ImageCarusel images={p.images} />
            </div>

            <div className="content">
              <MarkdownText text={p.content} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
