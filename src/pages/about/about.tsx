import { Component } from "react";
import PageTitle from "../../components/page-title/page-title";

import AnonymousMe from "../../assets/AnonymousMe.png";

import "./about.scss";

export default class AboutPage extends Component {
  render() {
    return (
      <div className="about-page">
        <PageTitle title="Me" />
        <div className="about-container">
          <div className="image">
            <img src={AnonymousMe} alt="anonymous me" />
            <span className="caption">
              Believe it or not. That's me, Mr. B!
            </span>
          </div>
          <div className="about-text-container">
            <h1>So...Let's get this over with, shall we?</h1>
            <p>
              I was born born at sometime. To be a little more specific, I was
              born after Jesus even after Albert Einstein and also after Mark
              Zuckerberg. I was born in the same country as: Wolfgang A. Mozart,
              Arnold Schwarzenegger, Peter Alexander, Sigmund Freud and some
              fascistic guy. Ok, I like developing and designing also I like
              making and playing music. I like many more things but, you know,
              not thaaat important things. Sooo...what else? Ahh, I like eating
              good food...like reeaally good food and also, I enjoy playing with
              my cat.
              <br />
              <br />
              But I won't say anything else...so, yeah...you might also go to
              the more interesting parts of my Website!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
