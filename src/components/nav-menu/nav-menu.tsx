import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import { routes } from "../../routes";

import Logo from "../../assets/MrB-Logo.png";

import "./nav-menu.scss";

interface NavMenuState {
  extended: boolean;
}

export default class NavMenu extends Component<{}, NavMenuState> {
  constructor(props: {}) {
    super(props);
    this.state = { extended: false };
  }

  private toggleNavMenu(): void {
    this.setState({ extended: !this.state.extended }, () => {
      if (this.state.extended) {
        this.attachListener();
      } else {
        this.removeListener();
      }
    });
  }

  private attachListener(): void {
    document.addEventListener("click", (e) => this.onClick(e));
  }

  private removeListener(): void {
    document.removeEventListener("click", (e) => this.onClick(e));
  }

  private onClick(event: MouseEvent): void {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    if (target.classList.contains("nav-list")) {
      return;
    }

    this.setState({ extended: false });
  }

  componentWillUnmount(): void {
    this.removeListener();
  }

  render() {
    return (
      <div className="nav-menu">
        <Link to="/" className="logo nav-link">
          <img src={Logo} alt="" loading="lazy" />
          Mr. B
        </Link>

        <div className="spacer" />

        <button className="nav-toggler" onClick={() => this.toggleNavMenu()}>
          <svg className="menu-icon" viewBox="0 0 50 50">
            <path d="M5 10 L45 10" />
            <path d="M5 25 L45 25" />
            <path d="M5 40 L45 40" />
          </svg>
        </button>

        <div className={this.state.extended ? "nav-list extended" : "nav-list"}>
          {routes
            .filter((r) => !r.disabled && r !== routes[0])
            .map((r, i) => {
              return (
                <NavLink
                  activeClassName="active"
                  className="nav-link"
                  to={"/" + r.path}
                  key={i}
                >
                  {r.title}
                </NavLink>
              );
            })}
        </div>
      </div>
    );
  }
}
