import { honorsAndAwards } from "../../data/honorsAndAwards";

import AwardHonorCard from "../../components/award-honor-card/award-honor-card";

export default function HonorsAwardsSection() {
  return (
    <div className="honors-awards-section container">
      <h1>Honors & Awards</h1>

      {honorsAndAwards.map((h, i) => (
        <AwardHonorCard key={i} honorOrAward={h} />
      ))}
    </div>
  );
}
