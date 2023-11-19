import { Component } from "react";
import { RangedContentItem } from "../../models/contentItem";

import MarkdownText from "../markdown-text/markdown-text";

import "./licence-certification-card.scss";

export interface LicenceCertificationCardProperties {
  licenceOrCertification: RangedContentItem;
}

export default class LicenceCertificationCard extends Component<LicenceCertificationCardProperties> {
  private get licenceOrCertification(): RangedContentItem {
    return this.props.licenceOrCertification;
  }

  render() {
    return (
      <div className="licence-certification-card">
        <div className="title-wrapper">
          <h2>{this.licenceOrCertification.title}</h2>
          <h3>Issued by {this.licenceOrCertification.subtitle}</h3>
        </div>

        <h4 className="subtle">
          {this.licenceOrCertification.start}
          {this.licenceOrCertification.end !== undefined
            ? ` - ${this.licenceOrCertification.end}`
            : ""}
        </h4>

        <MarkdownText text={this.licenceOrCertification.text} />
      </div>
    );
  }
}
