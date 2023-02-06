import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <div className='nav'>
      <Link className='nav__site-title'>Jobly</Link>
      <ul>
        <Link>Comapnies</Link>
        <Link>Jobs</Link>
        <Link>Signup</Link>
        <Link>Logout</Link>
      </ul>
    </div>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  return (
    <li className=''>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default NavBar;
