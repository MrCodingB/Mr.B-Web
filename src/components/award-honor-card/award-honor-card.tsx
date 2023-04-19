import { Component } from "react";
import { DatedContentItem } from "../../models/contentItem";

import MarkdownText from "../markdown-text/markdown-text";

import "./award-honor-card.scss";

export interface AwardHonorCardProperties {
  honorOrAward: DatedContentItem;
}

export default class AwardHonorCard extends Component<AwardHonorCardProperties> {
  private get honorOrAward(): DatedContentItem {
    return this.props.honorOrAward;
  }

  render() {
    return (
      <div className="award-honor-card">
        <div className="title-wrapper">
          <h2>{this.honorOrAward.title}</h2>
          <h3>{this.honorOrAward.subtitle}</h3>
        </div>

        <h4>{this.honorOrAward.date}</h4>

        <MarkdownText text={this.honorOrAward.text} />
      </div>
    );
  }
}
