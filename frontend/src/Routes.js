import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
const JoblyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Home />} />
    </Routes>
  );
};

export default JoblyRoutes;
