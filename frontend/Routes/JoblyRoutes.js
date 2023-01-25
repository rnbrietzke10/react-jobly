import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/Home';

function JoblyRoutes() {
  return (
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Home />} />
      <Route path="/signup" element={<Home />} />
    </Route>
  );
}

export default JoblyRoutes;
