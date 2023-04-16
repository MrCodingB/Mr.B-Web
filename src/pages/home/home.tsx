import { Component } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../routes";

import TextLogo from "../../assets/MrB-Logo-Text.png";

import "./home.scss";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="logo-container">
          <img src={TextLogo} alt="Mr.B ...and that's it" />
        </div>

        <div className="links">
          {routes
            .filter((r) => !r.disabled && r !== routes[0])
            .map((r, i) => (
              <Link key={i} to={"/" + r.path}>
                {r.title}
              </Link>
            ))}
        </div>
      </div>
    );
  }
}
