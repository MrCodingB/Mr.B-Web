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

          <div className="about-text-container container">
            <h1>Let's get this over with, shall we?</h1>

            <p>
              I was born born at sometime in the past. To be a little more
              specific, I was born after Jesus, after Albert Einstein and even
              after Mark Zuckerberg. I was born in the same country as Wolfgang
              A. Mozart, Arnold Schwarzenegger, Peter Alexander, Sigmund Freud
              and some fascist dude we'd better not talk about. I like
              programming and designing, also making and playing music. I like
              many more things but - you know - this page can only be so long.
              So...what else? Ahh, I also like eating good food and enjoy
              playing with my cat.
            </p>

            <p>
              But I won't say anything else...so, yeah...you might as well go to
              some of the more interesting parts of my website.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
