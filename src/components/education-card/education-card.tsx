import { Component } from "react";
import { RangedContentItem } from "../../models/contentItem";

import MarkdownText from "../markdown-text/markdown-text";

import "./education-card.scss";

export interface EducationCardProperties {
  position: RangedContentItem;
}

export default class EducationCard extends Component<EducationCardProperties> {
  private get education(): RangedContentItem {
    return this.props.position;
  }

  render() {
    return (
      <div className="education-card">
        <div className="title-wrapper">
          <h2>{this.education.title}</h2>
          <h3>{this.education.subtitle}</h3>
        </div>

        <h4 className="subtle">
          {this.education.start} - {this.education.end ?? "present"}
        </h4>

        <MarkdownText text={this.education.text} />
      </div>
    );
  }
}
