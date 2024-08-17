import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <ul className="navbar-links">
            <li><Link to="/login" className="navbar-link">Login</Link></li>
            <li><Link to="/register" className="navbar-link">Register</Link></li>
            <li><Link to="/profile" className="navbar-link">Profile</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



