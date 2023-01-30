import React from 'react';

const SearchBox = ({ items, setSearchResults }) => {
  const handleSubmit = (e) => e.preventDefault();

  const handleChange = (e) => {
    if (!e.target.value) return setSearchResults(items);

    const resultsArray = items.filter(
      (item) =>
        item.title.includes(e.target.value) ||
        item.body.includes(e.target.value)
    );

    setSearchResults(resultsArray);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search"></label>
      <input
        id="search"
        type="text"
        name="search"
        placeholder={`Search`}
        className="form-input"
        onChange={handleChange}
      />
      <button className="btn btn__search">Search</button>
    </form>
  );
};

export default SearchBox;
