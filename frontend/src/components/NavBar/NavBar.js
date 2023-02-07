import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
  const isLoggedIn = true;
  return (
    <div className="nav">
      <Link to="/" className="nav__site-title">
        Jobly
      </Link>
      <ul>
        {/* {isLoggedIn ?  <CustomLink to="/login">Login</CustomLink > <CustomLink to="/logout">Logout</CustomLink>: <CustomLink to="/companies">Comapnies</CustomLink> <CustomLink to="/jobs">Jobs</CustomLink> <CustomLink to="/logout">Logout</CustomLink>} */}

        {isLoggedIn ? (
          <>
            <CustomLink key="companies" to="/companies">
              Comapnies
            </CustomLink>
            <CustomLink keys="jobs" to="/jobs">
              Jobs
            </CustomLink>
            <CustomLink keys="profile" to="/profile">
              Profile
            </CustomLink>
            <CustomLink keys="logout" to="/logout">
              Logout
            </CustomLink>
          </>
        ) : (
          <>
            <CustomLink keys="signup" to="/signup">
              Signup
            </CustomLink>
            <CustomLink keys="login" to="/login">
              Login
            </CustomLink>
          </>
        )}
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
