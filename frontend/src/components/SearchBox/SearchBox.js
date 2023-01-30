import React, { useState } from 'react';

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // send request to api to get filtered jobs or companies
  };
  return (
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
  );
};

export default SearchBox;
