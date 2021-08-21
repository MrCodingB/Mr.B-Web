import { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import Logo from '../../assets/MrB-Logo.png';

import './nav-menu.scss';

export default class NavMenu extends Component {
  render() {
    return (
      <div className='nav-menu'>
        <Link to='/' className='logo'>
          <img src={Logo} alt='' loading='lazy' />
        </Link>
        <NavLink activeClassName='active' className='nav-link' to='/about'>
          About Me
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/coding'>
          Coding
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/other'>
          Other
        </NavLink>
        <NavLink activeClassName='active' className='nav-link' to='/contact'>
          Contact
        </NavLink>
      </div>
    );
  }
}
