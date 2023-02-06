import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const firstName = 'Sharon';
  const signupUser = () => {};
  const loginUser = () => {};
  return (
    <main className="Home__container">
      <h2 className="Home__title">Jobly</h2>
      <p>Find your next career!</p>

      {isLoggedIn ? (
        <h3>Welcome Back {firstName}</h3>
      ) : (
        <div className="Home__btn-container">
          <Link to="/signup" className="btn Home__btn" onClick={signupUser}>
            Sign Up
          </Link>
          <Link to="/login" className="btn Home__btn" onClick={loginUser}>
            Login
          </Link>
        </div>
      )}
    </main>
  );
};

export default Home;
