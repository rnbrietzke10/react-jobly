import React, { useState, useEffect } from 'react';
import './CompaniesList.css';
import SearchBox from '../SearchBox/SearchBox';
import JoblyApi from '../../JoblyAPIHelper';
import Company from '../Company/Company';

const CompaniesList = () => {
  const [companies, setCompanies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function getAllCompanies() {
      const data = await JoblyApi.getCompanies();
      setCompanies(data);
    }
    getAllCompanies();
  }, []);
  return (
    <div className="CompanyList-container outer-container">
      <SearchBox setSearchTerm={setSearchResults} items={companies} />
      <main className="Companylist">
        {
          /* map over jobs or companies */ companies.map((company) => {
            return <Company key={company.handle} company={company} />;
          })
        }
      </main>
    </div>
  );
};

export default CompaniesList;
