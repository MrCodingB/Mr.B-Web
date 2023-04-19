import React from "react";
import { educationPositions } from "../../data/education";

import EducationCard from '../../components/education-card/education-card';

import "./education.scss";

export default function EducationSection() {
  return (
    <div className="education-section container">
      <h1>Education</h1>

      {educationPositions.map((e, i) => (
        <EducationCard key={i} position={e} />
      ))}
    </div>
  );
}
