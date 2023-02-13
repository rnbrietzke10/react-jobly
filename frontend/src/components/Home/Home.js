import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import './Home.css';
const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <main className="Home__container">
      <h2 className="Home__title">Jobly</h2>

      {user ? (
        <h2>Welcome Back {user.username}</h2>
      ) : (
        <>
          <p>Find your next career!</p>{' '}
          <div className="Home__btn-container">
            <Link to="/signup" className="btn Home__btn">
              Sign Up
            </Link>
            <Link to="/login" className="btn Home__btn">
              Login
            </Link>
          </div>
        </>
      )}
    </main>
  );
};

export default Home;
