/* Reneders search input and coresponding jobs or companies */
import React, { useState } from 'react';

const SearchPage = () => {
  const types = ['Companies', 'Jobs'];
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  console.log(searchTerm);
  return (
    <div>
      <form>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          name="search"
          value={searchTerm}
          placeholder={`Search for ${types[0]}`}
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

export default SearchPage;
