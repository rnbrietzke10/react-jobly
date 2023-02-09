import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../../hooks/useLocalStorage';
import JoblyApi from '../../JoblyAPIHelper';
import '../styles/forms.css';
import './SignUpForm.css';

const SignUpFrom = () => {
  const navigate = useNavigate();
  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  };
  const [itemData, setItemData] = useState(INITIAL_STATE);
  const [userData, setUserData] = useLocalStorage();
  const handleChange = e => {
    const { name, value } = e.target;
    setItemData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const allDataEntered =
      itemData.firstName &&
      itemData.lastName &&
      itemData.username &&
      itemData.email &&
      itemData.password;
    if (allDataEntered) {
      async function registerUser() {
        const tokenValue = await JoblyApi.createUser(itemData);
        console.log('TokenValue: ', tokenValue);
        setUserData('token', tokenValue);
        navigate('/');
      }
      registerUser();
    } else {
      alert('Please enter all data');
    }
  };
  return (
    <div className='wrapper outer-container '>
      <div className='form-container'>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='form-input-container'>
            <label htmlFor='username'>Username:</label>
            <input
              id='username'
              type='text'
              name='username'
              value={itemData.itemName}
              placeholder='Enter your username'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='form-input-container'>
            <label htmlFor='firstName'>First Name:</label>
            <input
              id='firstName'
              type='text'
              name='firstName'
              value={itemData.firstName}
              placeholder='Enter your First Name'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='form-input-container'>
            <label htmlFor='lastName'>Last Name:</label>
            <input
              id='lastName'
              type='text'
              name='lastName'
              value={itemData.lastName}
              placeholder='Enter your Last Name'
              className='form-input'
              onChange={handleChange}
            />
          </div>{' '}
          <div className='form-input-container'>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              type='email'
              name='email'
              value={itemData.email}
              placeholder='Enter your email'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <div className='form-input-container'>
            <label htmlFor='password'>Password:</label>
            <input
              id='password'
              type='password'
              name='password'
              value={itemData.password}
              autoComplete='on'
              placeholder='Enter your password'
              className='form-input'
              onChange={handleChange}
            />
          </div>
          <button className='btn submit-btn'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignUpFrom;
