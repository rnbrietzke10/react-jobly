import React from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await localStorage.removeItem('user');
    await localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <div className="nav">
      <Link to="/" className="nav__site-title">
        Jobly
      </Link>
      <ul>
        {user ? (
          <>
            <CustomLink key="companies" to="/companies">
              Comapnies
            </CustomLink>
            <CustomLink key="jobs" to="/jobs">
              Jobs
            </CustomLink>
            <CustomLink key="profile" to="/profile">
              Profile
            </CustomLink>
            <li
              key="logout"
              className="nav__link"
              id="logout"
              onClick={logoutHandler}
            >
              {user.username}

              <span> (Logout)</span>
            </li>
          </>
        ) : (
          <>
            <CustomLink key="signup" to="/signup">
              Signup
            </CustomLink>
            <CustomLink key="login" to="/login">
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
  const activeClass = isActive ? 'active' : '';
  return (
    <li className={`nav__link ${activeClass}`}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};

export default NavBar;
