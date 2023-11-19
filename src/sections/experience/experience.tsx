import React from "react";
import ExperienceCard from '../../components/experience-card/experience-card';
import ExperienceListCard from '../../components/experience-list-card/experience-list-card';

import { experiences } from "../../data/experiences";

import "./experience.scss";

export default function ExperienceSection() {
  return (
    <div className="experience-section container">
      <h1>Professional Experience</h1>

      {experiences.map((e, i) => (
        ('positions' in e)
          ? <ExperienceListCard key={i} experiences={e} />
          : <ExperienceCard key={i} position={e} />
      ))}
    </div>
  );
}
