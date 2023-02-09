import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './JobsList.css';
import Job from '../Job/Job';
import SearchBox from '../SearchBox/SearchBox';
import JoblyApi from '../../JoblyAPIHelper';
const JobsList = () => {
  const locationInfo = useLocation();
  const location = locationInfo.pathname.slice(1);

  const [jobs, setJobs] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function getAlljobs() {
      const data = await JoblyApi.getJobs();
      setJobs(data);
    }
    getAlljobs();
  }, []);

  useEffect(() => {
    async function getFilteredJobs() {
      setJobs(searchResults);
    }
    getFilteredJobs();
  }, [searchResults]);
  return (
    <div className='Jobs__wrapper outer-container'>
      <SearchBox
        setSearchResults={setSearchResults}
        items={jobs}
        location={location}
      />
      <div className='Jobs__container'>
        {jobs.map(job => (
          <Job key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
