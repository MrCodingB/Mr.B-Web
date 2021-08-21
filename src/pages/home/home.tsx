import { Component } from 'react';
import { Link } from 'react-router-dom';

import './home.scss';

export default class HomePage extends Component {
  render() {
    return (
      <div className='home-page'>
        <Link to='/about'>Me</Link>
        <Link to='/coding'>Coding</Link>
        <Link to='/other'>Other</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    );
  }
}
