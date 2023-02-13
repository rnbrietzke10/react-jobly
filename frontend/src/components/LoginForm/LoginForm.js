import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { UserContext } from '../../context/UserContext';
import JoblyApi from '../../JoblyAPIHelper';

import '../styles/forms.css';
const LoginForm = () => {
  const INITIAL_STATE = {
    username: null,
    password: null,
  };
  const navigate = useNavigate();
  const { setCurrentUser } = useContext(UserContext);

  const [itemData, setItemData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allDataEntered = itemData.username && itemData.password;
    if (allDataEntered) {
      async function login(loginInfo) {
        const { allUserInfo } = await JoblyApi.loginUser(loginInfo);
        await setCurrentUser(allUserInfo.user);
      }

      login(itemData);

      setItemData(INITIAL_STATE);
      navigate('/');
    } else {
      alert('Please enter all data');
    }
  };
  return (
    <div className="wrapper outer-container ">
      <div className="form-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-input-container">
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              name="username"
              value={itemData.itemName}
              placeholder="Enter your username"
              className="form-input"
              onChange={handleChange}
            />
          </div>
          <div className="form-input-container">
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="on"
              value={itemData.description}
              placeholder="Enter your password"
              className="form-input"
              onChange={handleChange}
            />
          </div>

          <button className="btn submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
