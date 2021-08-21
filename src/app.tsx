import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import PageRoute from './components/page-route/page-route';
import AboutPage from './pages/about/about';
import CodingPage from './pages/coding/coding';
import OtherPage from './pages/other/other';
import ContactPage from './pages/contact/contact';
import HomePage from './pages/home/home';

export default function App() {
  return (
    <Switch>
      <PageRoute exact path='/home' title='Home' component={HomePage} />
      <PageRoute exact path='/about' title='About Me' component={AboutPage} />
      <PageRoute exact path='/coding' title='Coding Projects' component={CodingPage} />
      <PageRoute exact path='/other' title='Other Projects' component={OtherPage} />
      <PageRoute exact path='/contact' title='Contact' component={ContactPage} />
      <Route path='/'>
        <Redirect to='/home' />
      </Route>
    </Switch>
  );
}
