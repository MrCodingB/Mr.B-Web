import { IRoute } from './models/route';

import { codingProjects } from './data/codingProjects';
import { otherProjects } from './data/otherProjects';

import HomePage from './pages/home/home';
import AboutPage from './pages/about/about';
import CodingPage from './pages/coding/coding';
import OtherPage from './pages/other/other';
import ContactPage from './pages/contact/contact';

export const routes: IRoute[] = [
  {
    path: 'home',
    title: 'Home',
    component: HomePage
  },
  {
    path: 'about',
    title: 'About',
    component: AboutPage
  },
  {
    path: 'coding',
    title: 'Coding',
    component: CodingPage,
    disabled: codingProjects.length <= 0
  },
  {
    path: 'other',
    title: 'Other',
    component: OtherPage,
    disabled: otherProjects.length <= 0
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactPage
  }
];
