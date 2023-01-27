import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import LoginForm from './components/LoginForm/LoginForm';
import SearchPage from './components/SearchPage/SearchPage';
import SignUpFrom from './components/SignUpForm/SignUpFrom';
import UserProfile from './components/UserProfile/UserProfile';
const JoblyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<SearchPage endpoint="companies" />} />
      <Route path="/jobs" element={<SearchPage endpoint="jobs" />} />
      <Route path="/signup" element={<SignUpFrom />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
};

export default JoblyRoutes;
