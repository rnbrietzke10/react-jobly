import React, { useState } from 'react';

import JoblyApi from '../../JoblyAPIHelper';
import './Searchbox.css';

const SearchBox = ({ items, setSearchResults, location }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const resultsArray = await JoblyApi.getSearchResults(searchTerm, location);

    setSearchResults(resultsArray);
    console.log(resultsArray);
  };

  const handleChange = e => {
    if (!e.target.value) return setSearchResults(items);
    setSearchTerm(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit} className='SearchBox__form'>
      <label htmlFor='search'></label>
      <input
        id='search'
        type='text'
        name='search'
        placeholder={`Search`}
        className='form-input'
        onChange={handleChange}
      />
      <button className='btn btn__search'>Search</button>
    </form>
  );
};

export default SearchBox;
