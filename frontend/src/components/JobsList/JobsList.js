import React, { useEffect, useState } from 'react';
import './JobsList.css';
import Job from '../Job/Job';
import SearchBox from '../SearchBox/SearchBox';
import JoblyApi from '../../JoblyAPIHelper';
const JobsList = () => {
  const INITIAL_STATE = [
    {
      title: 'Manager',
      companyName: 'Apple',
      salary: '$56,000',
      equity: 0.1,
    },
    {
      title: 'Assistant Manager',
      companyName: 'Apple',
      salary: '$36,000',
    },
  ];

  const [jobs, setJobs] = useState(INITIAL_STATE);
  const [searchResults, setSearchResults] = useState([]);
  useEffect(() => {
    async function getAlljobs() {
      const data = await JoblyApi.getJobs();
      setJobs(data);
    }
    getAlljobs();
  }, []);
  return (
    <div className="Jobs__wrapper outer-container">
      <SearchBox setSearchTerm={setSearchResults} items={jobs} />
      <div className="Jobs__container">
        {jobs.map((job) => (
          <Job job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsList;
