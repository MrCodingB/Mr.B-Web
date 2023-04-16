import { Component } from "react";
import PageTitle from "../../components/page-title/page-title";
import { otherProjects } from "../../data/otherProjects";

export default class OtherPage extends Component {
  render() {
    return (
      <div className="other-page list-page">
        <PageTitle title="Other" />
        <div className="listing-container container">
          <p className="description">
            Here you can find all the other stuff that I did/made(e.g. Piano
            pieces that I play, etc.).
          </p>

          {otherProjects.map((c, i) => (
            <div className="project" key={i}>
              <h2>{c.href ? <a href={c.href}>{c.name}</a> : c.name}</h2>

              <div className="list">
                {c.projects.map((p, i) => (
                  <a className="list-item" key={i} href={p.href}>
                    {p.name}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
