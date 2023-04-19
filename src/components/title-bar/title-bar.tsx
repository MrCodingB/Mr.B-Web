import { Component } from "react";
import { contactDetails } from "../../data/contact";

import "./title-bar.scss";

export default class TitleBar extends Component {
  render() {
    return (
      <div className="title-bar">
        <div className="container">
          <span className="title">Sebastain Wöß</span>

          <div className="contact-list">
            {contactDetails.map((c, i) => (
              <a
                key={i}
                href={c.href}
                title={c.name + ": " + c.content}
                style={{ color: c.color }}
                target="_blank"
                rel="noreferrer"
              >
                <i className={"bi bi-" + c.icon}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
