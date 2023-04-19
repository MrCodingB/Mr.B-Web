import React from "react";

import { experiences } from "../../data/experiences";

import ExperienceCard from '../../components/experience-card/experience-card';

import "./experience.scss";

export default function ExperienceSection() {
  return (
    <div className="experience-section container">
      <h1>Professional Experience</h1>

      {experiences.map((e, i) => (
        <ExperienceCard key={i} position={e} />
      ))}
    </div>
  );
}
