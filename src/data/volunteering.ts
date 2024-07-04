import { ExperienceList } from '../models/ExperienceList';
import { RangedContentItem } from '../models/contentItem';

export const volunteering: (RangedContentItem | ExperienceList)[] = [
  {
    title: 'Emergency Medical Technician (Rettungssanitäter)',
    subtitle: 'Arbeiter-Samariter-Bund Österreichs',
    start: 'June 2024',
    text: ``
  },
  {
    title: 'Water Rescue',
    subtitle: 'Arbeiter-Samariter-Bund Österreichs',
    start: 'April 2024',
    text: `
Health surveillance at events on and around bodies of water and life guarding at Pichlingersee (bathing lake in Linz).
`
  },
  {
    title: 'Lecturer',
    subtitle: 'KinderUni OÖ',
    start: '2018',
    end: '2019',
    text: `
One-day courses about basic programming for children during the summer of 2018 and 2019.

[KinderUni Linz](https://www.kinderuni-ooe.at/kinderuni-ooe/linz)
`
  }
];
