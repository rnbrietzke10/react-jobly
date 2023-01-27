import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SearchPage from './components/SearchPage/SearchPage';
const JoblyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Home />} />
      <Route path="/companies" element={<SearchPage />} />
    </Routes>
  );
};

export default JoblyRoutes;
