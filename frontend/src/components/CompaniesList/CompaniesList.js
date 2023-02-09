import React, { useState, useEffect } from 'react';
import './CompaniesList.css';
import { useLocation } from 'react-router-dom';
import SearchBox from '../SearchBox/SearchBox';
import JoblyApi from '../../JoblyAPIHelper';
import Company from '../Company/Company';

const CompaniesList = () => {
  const locationInfo = useLocation();
  const location = locationInfo.pathname.slice(1);
  console.log(location);
  const [companies, setCompanies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function getAllCompanies() {
      const data = await JoblyApi.getCompanies();
      setCompanies(data);
    }
    getAllCompanies();
  }, []);
  useEffect(() => {
    async function getFilteredCompanies() {
      setCompanies(searchResults);
    }
    getFilteredCompanies();
  }, [searchResults]);
  return (
    <div className='CompanyList_wrapper outer-container'>
      <SearchBox
        setSearchResults={setSearchResults}
        items={companies}
        location={location}
      />
      <div className='CompanyList_container'>
        {
          /* map over jobs or companies */ companies.map(company => {
            return <Company key={company.handle} company={company} />;
          })
        }
      </div>
    </div>
  );
};

export default CompaniesList;
