import EducationCard from '../../components/education-card/education-card';

import { educationPositions } from "../../data/education";

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
