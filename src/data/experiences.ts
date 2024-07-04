import { ExperienceList } from '../models/ExperienceList';
import { RangedContentItem } from '../models/contentItem';

export const experiences: (RangedContentItem | ExperienceList)[] = [
  {
    title: 'Owner & Software Architect',
    subtitle: 'Wöß Sharp Software e.U.',
    start: 'March 2024',
    text: `
We are a small company seated in Linz specialized on individual software development.
From Web-Sites, Back-End APIs and Databases to application development and hardware programming:
We can help you or your company to reach full potential using our custom made software solutions.

[Get in touch!](https://w-sharp-s.at)
`
  },
  {
    organisation: 'Arbeiter-Samariter-Bund Österreichs',
    start: 'September 2023',
    positions: [
      {
        title: 'Emergency Medical Technician (Rettungssanitäter)',
        subtitle: '',
        start: 'November 2023',
        text: `
Voluntary since June 2024

**Skills:** EMT, Emergency Medical Services
`
      },
      {
        title: 'Civilian Alternative Service Worker',
        subtitle: '',
        start: 'September 2023',
        end: 'May 2024',
        text: `
Civilian alternative service from Sep. 2023 - May 2024

**Skills:** First Aid, CPR, AED
`
      }
    ]
  },
  {
    title: 'Full Stack Developer',
    subtitle: 'Signum Plus GmbH',
    start: 'July 2021',
    end: 'February 2023',
    text: `
**Activities:** development of a web-shop and customer support site, virtualization of hardware interactions, backend development, creation of a static website
and WordPress plugins and themes, database design

**Skills:** C++, C#, TypeScript, Angular, WordPress, SCSS, HTML, Node.js, SQL
`
  },
  {
    title: 'Full Stack Developer',
    subtitle: 'Softwaretechnik GmbH',
    start: 'July 2020',
    end: 'March 2021',
    text: `
**Activities:** development of an app for mobile devices, web development, backend development, creation of a inventory keeping system with automatic
consumption prognosis and order creation

**Skills:** JavaScript, TypeScript, Angular, Ionic Framework, HTML, SCSS, Node.js, Adobe XD
`
  }
];
