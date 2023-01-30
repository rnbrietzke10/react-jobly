import React, { useState } from 'react';
import './CompaniesList.css';

const CompaniesList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send request to api to get filtered jobs or companies
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          name="search"
          value={searchTerm}
          placeholder={`Search for `}
          className="form-input"
          onChange={handleChange}
        />
        <button>Search</button>
      </form>
      <main className="SearcPage-details">
        {/* map over jobs or companies */}
      </main>
    </div>
  );
};

export default CompaniesList;
