import { Component } from "react";
import PageTitle from "../../components/page-title/page-title";
import { contactDetails } from "../../data/contact";

import "./contact.scss";

export default class ContactPage extends Component {
  render() {
    return (
      <div className="contact-page">
        <PageTitle title="Contact" />
        <div className="contact-container container">
          <table>
            <tbody>
              {contactDetails.map((c, i) => (
                <tr key={i}>
                  <td className="value-name">{c.name}:</td>
                  <td>
                    <a href={c.href}>{c.content}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
