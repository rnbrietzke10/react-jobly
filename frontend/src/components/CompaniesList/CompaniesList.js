import React, { useState } from 'react';
import './CompaniesList.css';
import SearchBox from '../SearchBox/SearchBox';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div>
      <SearchBox setSearchTerm={setSearchResults} items={companies} />
      <main className="Companylist">
        {/* map over jobs or companies */ companies.map((company) => {})}
      </main>
    </div>
  );
};

export default CompaniesList;
