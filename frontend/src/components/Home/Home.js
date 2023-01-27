import React, { useState } from 'react';
import './Home.css';
const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const firstName = 'Sharon';
  const signupUser = () => {};
  const loginUser = () => {};
  return (
    <>
      <div>NavBar</div>
      <main>
        <div>
          <h2>Jobly</h2>
          <p>Find your next career!</p>

          {isLoggedIn ? (
            <h3>Welcome Back {firstName}</h3>
          ) : (
            <div>
              <button onClick={signupUser}>Sign Up</button>
              <button onClick={loginUser}>Login</button>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Home;
