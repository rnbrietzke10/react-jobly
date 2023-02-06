import React, { useState } from 'react';
import '../styles/forms.css';
import './SignUpForm.css';

const SignUpFrom = () => {
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };
  const [itemData, setItemData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setItemData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allDataEntered =
      itemData.firstName &&
      itemData.lastName &&
      itemData.username &&
      itemData.email &&
      itemData.password;
    if (allDataEntered) {
      setItemData(INITIAL_STATE);
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

export default SignUpFrom;
