import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CompaniesList from './components/CompaniesList/CompaniesList';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import Home from './components/Home/Home';
import JobsList from './components/JobsList/JobsList';
import LoginForm from './components/LoginForm/LoginForm';

import SignUpFrom from './components/SignUpForm/SignUpFrom';
import UserProfile from './components/UserProfile/UserProfile';
const JoblyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/companies" element={<CompaniesList />} />
      <Route path="/jobs" element={<JobsList />} />
      <Route path="/signup" element={<SignUpFrom />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/companies/:handle" element={<CompanyDetails />} />
    </Routes>
  );
};

export default JoblyRoutes;
