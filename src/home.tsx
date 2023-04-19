import React from "react";

import TitleBar from "./components/title-bar/title-bar";
import IntroductionSection from "./sections/introduction/introduction";
import ContactSection from "./sections/contact/contact";
import ExperienceSection from "./sections/experience/experience";
import EducationSection from "./sections/education/education";
import ProjectsSection from "./sections/projects/projects";
import HonorsAwardsSection from './sections/honors-awards/honors-awards';

import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <TitleBar />

      <div className="content">
        <IntroductionSection />

        <ContactSection />

        <ExperienceSection />

        <EducationSection />

        <HonorsAwardsSection />

        <ContactSection />

        <ProjectsSection />
      </div>
    </div>
  );
}
