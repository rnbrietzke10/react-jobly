import React from 'react';
import './JobsList.css';
import Job from '../Job/Job';
const JobsList = () => {
  const jobs = [
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
  return (
    <div>
      {jobs.map((job) => (
        <Job job={job} />
      ))}
    </div>
  );
};

export default JobsList;
