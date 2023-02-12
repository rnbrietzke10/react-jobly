import React, { useContext } from 'react';
import { Link, useMatch, useResolvedPath, useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import JoblyApi from '../../JoblyAPIHelper';

import './NavBar.css';

const NavBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await localStorage.removeItem('user');
    await localStorage.removeItem('token');
    setCurrentUser(null);
    navigate('/');
  };

  return (
    <div className='nav'>
      <Link to='/' className='nav__site-title'>
        Jobly
      </Link>
      <ul>
        {currentUser ? (
          <>
            <CustomLink key='companies' to='/companies'>
              Comapnies
            </CustomLink>
            <CustomLink key='jobs' to='/jobs'>
              Jobs
            </CustomLink>
            <CustomLink key='profile' to='/profile'>
              Profile
            </CustomLink>
            <li
              key='logout'
              className='nav__link'
              id='logout'
              onClick={logoutHandler}
            >
              {currentUser.username}

              <span> (Logout)</span>
            </li>
          </>
        ) : (
          <>
            <CustomLink key='signup' to='/signup'>
              Signup
            </CustomLink>
            <CustomLink key='login' to='/login'>
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
