import React from "react";
import LicenceCertificationCard from '../../components/licence-certification-card/licence-certification-card';

import { licencesAndCertifications } from '../../data/licencesAndCertifications';

import "./licences-certifications.scss";

export default function LicencesCertificationsSection() {
  return (
    <div className="licences-certifications-section container">
      <h1>Licences & Certifications</h1>

      {licencesAndCertifications.map((h, i) => (
        <LicenceCertificationCard key={i} licenceOrCertification={h} />
      ))}
    </div>
  );
}
