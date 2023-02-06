import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  return (
    <div className="nav">
      <Link to="/" className="nav__site-title">
        Jobly
      </Link>
      <ul>
        {/* {isLoggedIn ?  <CustomLink to="/login">Login</CustomLink > <CustomLink to="/logout">Logout</CustomLink>: <CustomLink to="/companies">Comapnies</CustomLink> <CustomLink to="/jobs">Jobs</CustomLink> <CustomLink to="/logout">Logout</CustomLink>} */}
        <CustomLink to="/companies">Comapnies</CustomLink>
        <CustomLink to="/jobs">Jobs</CustomLink>
        <CustomLink to="/signup">Signup</CustomLink>
        <CustomLink to="/login">Login</CustomLink>
        <CustomLink to="/logout">Logout</CustomLink>
      </ul>
    </div>
  );
};

const CustomLink = ({ to, children, ...props }) => {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? 'active' : ''}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default NavBar;
