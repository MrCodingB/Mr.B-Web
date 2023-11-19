import { Component } from "react";
import { ExperienceList } from "../../models/ExperienceList";
import MarkdownText from "../markdown-text/markdown-text";

import "./experience-list-card.scss";

export interface ExperienceListCardProperties {
  experiences: ExperienceList;
}

export default class ExperienceListCard extends Component<ExperienceListCardProperties> {
  private get experience(): ExperienceList {
    return this.props.experiences;
  }

  render() {
    return (
      <div className="experience-list-card">
        <div className="title-wrapper">
          <h2>{this.experience.organisation}</h2>
          <h4 className="subtle">
            {this.experience.start} - {this.experience.end ?? "present"}
          </h4>
        </div>

        <div className="positions">
          {this.experience.positions.map((p, i) => (
            <div className="position" key={i}>
              <h2>{p.title}</h2>

              <h4 className="subtle">
                {p.start} - {p.end ?? "present"}
              </h4>

              <MarkdownText text={p.text} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
