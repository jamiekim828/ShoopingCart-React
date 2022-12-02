import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import img from '../../assets/logo.jpeg';

export default function NavBar() {
  return (
    <div className='navbar'>
      <div>
        <Link to='/'>
          <img src={img} alt='logo' className='logo' />
        </Link>
      </div>
      <div className='navbar-menu'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart</Link>
      </div>
    </div>
  );
}
