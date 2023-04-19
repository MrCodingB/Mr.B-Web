import React from "react";

import "./contact.scss";
import { contactDetails } from "../../data/contact";

export default function ContactSection() {
  return (
    <div className="contact-section">
      <div className="container">
        <h1>Get in contact...</h1>

        <p>
          You can get into contact with me in many ways. I'm reachable through a
          few platforms and also per mail if you prefer. Feel free to reach out
          to me for business or personal requests or offers.
        </p>

        <div className="contact-list">
          {contactDetails.map((c, i) => (
            <a
              className="contact-item"
              href={c.href}
              title={c.name + ": " + c.content}
              key={i}
            >
              <i className={"bi bi-" + c.icon}></i>

              <span>{c.content}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
