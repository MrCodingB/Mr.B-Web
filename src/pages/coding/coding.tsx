import { Component } from "react";
import PageTitle from "../../components/page-title/page-title";
import { codingProjects } from "../../data/codingProjects";

export default class CodingPage extends Component {
  render() {
    return (
      <div className="coding-page list-page">
        <PageTitle title="Coding" />
        <div className="listing-container container">
          <p className="description">
            Here you can find some of my coding projects.
          </p>

          {codingProjects.map((c, i) => (
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
