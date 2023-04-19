import { Component } from "react";
import { RangedContentItem } from "../../models/contentItem";

import MarkdownText from "../markdown-text/markdown-text";

import "./experience-card.scss";

export interface ExperienceCardProperties {
  position: RangedContentItem;
}

export default class ExperienceCard extends Component<ExperienceCardProperties> {
  private get experience(): RangedContentItem {
    return this.props.position;
  }

  render() {
    return (
      <div className="experience-card">
        <div className="title-wrapper">
          <h2>{this.experience.title}</h2>
          <h3>at {this.experience.subtitle}</h3>
        </div>

        <h4>
          {this.experience.start} - {this.experience.end ?? "present"}
        </h4>

        <MarkdownText text={this.experience.text} />
      </div>
    );
  }
}
