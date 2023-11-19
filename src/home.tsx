import React from "react";

import TitleBar from "./components/title-bar/title-bar";
import IntroductionSection from "./sections/introduction/introduction";
import ContactSection from "./sections/contact/contact";
import ExperienceSection from "./sections/experience/experience";
import EducationSection from "./sections/education/education";
import ProjectsSection from "./sections/projects/projects";
import HonorsAwardsSection from './sections/honors-awards/honors-awards';
import LicencesCertificationsSection from './sections/licences-certifications/licences-certifications';

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

        <LicencesCertificationsSection />

        <HonorsAwardsSection />

        <ContactSection />

        <ProjectsSection />
      </div>
    </div>
  );
}
