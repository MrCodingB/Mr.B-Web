import ExperienceCard from '../../components/experience-card/experience-card';
import ExperienceListCard from '../../components/experience-list-card/experience-list-card';

import { volunteering } from "../../data/volunteering";

export default function VolunteeringSection() {
  return (
    <div className="volunteering-section container">
      <h1>Volunteering</h1>

      {volunteering.map((e, i) => (
        ('positions' in e)
          ? <ExperienceListCard key={i} experiences={e} />
          : <ExperienceCard key={i} position={e} />
      ))}
    </div>
  );
}
