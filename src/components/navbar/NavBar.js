import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

import img from '../../assets/logo.jpeg';

export default function NavBar({cartItems}) {
  // get only the quantity of the objects
  const quantityArray = cartItems.map((element) => element.quantity);
  
  return (
    <div className='navbar'>
      <div>
        <Link to='/'>
          <img src={img} alt='logo' className='logo' />
        </Link>
      </div>
      <div className='navbar-menu'>
        <Link to='/'>Home</Link>
        <Link to='/cart'>Cart<span>({quantityArray.length > 0 ? quantityArray.reduce((a, b) => a + b) : 0})</span></Link>
      </div>
    </div>
  );
}
